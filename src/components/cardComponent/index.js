import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/Gadjet.module.css";
import useTranslation from 'next-translate/useTranslation';


const CardComponent = ({ product, name }) => {
  const { t } = useTranslation()
  const [state, setState] = useState(false)
  const check = async () => {
    const res = await axios.get("http://localhost:5000/api/basketGet");
    const el = res.data.find((item) => {
      return item.name == product.name && item.description == product.description
    });
    console.log(el);
    el
      ? localStorage.setItem("isToggle", JSON.stringify(true))
      : localStorage.setItem("isToggle", JSON.stringify(false));
    setState(true)
  };
  return (
    <Link href={`/allProduct/${name}/${product._id}`}>
      <a style={{ textDecoration: "none", color: "black" }}>
        <div className={styles.body} onClick={() => check()}>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={`${styles.face}, ${styles.face1}`}>
                <div className={styles.content}>
                  <h5 className={styles.h5}>{product.name}</h5>
                  <img
                    alt="Card cap"
                    src={product.img.length > 100 ? product.img : "/gadjet.png"}
                    width="220px"
                    height="200px"
                  />
                </div>
              </div>
              <div className={`${styles.face}, ${styles.face2}`}>
                <div className={styles.content}>
                  <p>
                    {product.description.substring(0, 50)} ...
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    {product.price}
                  </p>
                  <a href="#" type="button" className={styles.more}>
                    {t("common:more")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CardComponent;
