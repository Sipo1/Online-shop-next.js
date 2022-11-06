import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Basket.module.css";
import axios from 'axios';

export async function getStaticProps() {
  const res = await axios.get("http://localhost:5000/api/basketGet")
  const data = res.data

  return {
    props: { data },
  }
}

const Basket = ({ data }) => {
  const [basketList, setBasketList] = useState([])

  useEffect(() => {
    setBasketList(data)
  }, [setBasketList, data])

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/basket/delete/${id}`)
      localStorage.setItem("isToggle", JSON.stringify(false))
      const data = setBasketList((prev) => {
        return prev.filter((item) => {
          return item._id !== id
        })
      })
    } catch (e) {
      console.log(e)
    }

  }

  function removeDuplicates(data, key) {

    return [
      ...new Map(data.map(item => [key(item), item])).values()
    ]

  };

  const filteredBasketList = removeDuplicates(basketList, item => item.name)

  return (
    <div className={styles.wrapper}>
      <div className={basketList.length ? styles.cardWrapper : styles.textWrapper}>
        {filteredBasketList.length ?
          filteredBasketList.map((item) => {
            return (
              <div key={item._id} className={styles.card}>
                <button
                  onClick={() => removeItem(item._id)}
                  className={styles.removeBtn}
                >
                  X
                </button>
                <div className={styles.cardImg}>
                  <Image unoptimized src={item.img} width={200} height={200} />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.description}>{item.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p className={styles.price}> {item.price}</p>
                  </div>
                </div>
              </div>
            );

          }
          ) : <p className={styles.basketText}>Basket is Empty</p>}
      </div>
    </div>
  );
};
export default Basket;
