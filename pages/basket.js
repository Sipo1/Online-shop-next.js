import { useEffect, useState } from "react";
import styles from "../styles/Basket.module.css";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
} from "reactstrap";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:5000/api/basketGet");
  const data = res.data;

  return {
    props: { data },
  };
}

const Basket = ({ data }) => {
  const [basketList, setBasketList] = useState([]);
  const navigate = useRouter()

  useEffect(() => {
    setBasketList(data);
  }, [setBasketList, data]);

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/basket/delete/${id}`);
      localStorage.setItem("isToggle", JSON.stringify(false));
       setBasketList((prev) => {
        return prev.filter((item) => {
          return item._id !== id;
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={basketList.length ? styles.cardWrapper : styles.textWrapper}
      >
        {basketList.length ? (
          basketList.map((item) => {
            return (
              <Card
                key={item._id}
                className={styles.cards}
               
              >
                <CardBody>
                  <div  className={styles.imgWrapper}>
                    <img src={item.img} className={styles.basketImg} />
                  </div>

                  <CardText className={styles.cardTexts}>
                    <strong>{item.name}</strong>{" "}
                  </CardText>
                  <CardText className={styles.cardTexts2}>
                    {item.description.substring(0, 100)}
                  </CardText>
                  <CardText className={styles.cardTexts3}>
                    {item.price}
                  </CardText>
                </CardBody>
                <CardFooter className={styles.cardFooters}>
                  <button className={styles.basketButtonsDelete} onClick={() => removeItem(item._id)}>
                    {" "}
                    Delete{" "}
                  </button>
                  <button style={{ width: "45%" }} className={styles.basketButtonsBuy} onClick={() => navigate.push("/contactUs")}>
                    Contact Us
                  </button>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <p className={styles.basketText}>Basket is Empty</p>
        )}
      </div>
    </div>
  );
};
export default Basket;
