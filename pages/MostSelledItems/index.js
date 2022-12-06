import { useState, useEffect } from "react";
import styles from "../../styles/MostSelledItems.module.css";
import Link from "next/link";
import axios from "axios";
import useTranslation from 'next-translate/useTranslation';


const MostSelledItems = () => {
  const [mostSelledItemsData, setMostSelledItemsData] = useState([]);
  const [state, setState] = useState(false)
  const { t } = useTranslation()


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/mostSaledItemsGet")
      .then((response) => setMostSelledItemsData(response.data));
  }, []);

  const check = async (id) => {
    const obj = mostSelledItemsData.find((item) => item._id == id);
    const res = await axios.get("http://localhost:5000/api/basketGet");
    const el = res.data.find((item) => item.name == obj.name);
    el
      ? localStorage.setItem("isToggle", JSON.stringify(true))
      : localStorage.setItem("isToggle", JSON.stringify(false));
    setState(true)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>
        {t("common:mostSalledTitle")}
        </p>
        <p className={styles.text2}>
          {t("common:mostSalledDesc")}
          
        </p>
      </div>
      <div className={styles.cardWrapper}>
        {mostSelledItemsData.map((item) => {
          return (
            <Link key={item._id} href={`MostSelledItems/${item._id}`}>
              <div className={styles.card} onClick={() => check(item._id)}>
                <div className={styles.cardImg}>
                  <img unoptimized='true' src={item.img} className={styles.cardPicture} />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.basketAndPrice}>
                    <p className={styles.price}> {item.price}</p>

                    <div className={styles.pieceAndImage}>
                      <div className={styles.piece}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MostSelledItems;
