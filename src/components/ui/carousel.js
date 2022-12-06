import styles from "../../../styles/Adverting.module.css";
import { useRouter } from 'next/router';
import  useTranslation  from 'next-translate/useTranslation';

export const Carusel = () => {
  const navigate = useRouter()
  const { t } = useTranslation()

  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${styles.wraperCarusel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ width: "194px", height: "2px", borderRadius: "0px" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ width: "194px", height: "2px", borderRadius: "0px" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ width: "194px", height: "2px", borderRadius: "0px" }}
        ></button>
      </div>




      <div className={`carousel-inner ${styles.innerBlock}`} style={{ display: "flex" }}>



        <div style={{ width: "50%" }}>
          <p className={styles.text1}>{t("common:AdvTitle")}</p>
          <p className={styles.text2}>
          {t("common:AdvDesc")}
          </p>
          <button className={styles.btn} onClick={() => navigate.push("/allProduct/Phones")}>{t("common:AdvBtn")}</button>
        </div>

        <div className={`carousel-item active ${styles.imgWrapper}`} onClick={() => navigate.push("/allProduct/Phones")}>
          <img
            src="/advertingimg.png"
            className="d-block w-100"
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>







      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ position: "absolute", left: "-70px" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ position: "absolute", right: "-70px" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
