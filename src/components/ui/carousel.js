import styles from "../../../styles/Adverting.module.css";
import { useRouter } from 'next/router';

export const Carusel = () => {
  const navigate = useRouter()
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "rgb(220	229	226)",
      }}
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




      <div className="carousel-inner" style={{ display: "flex" }}>



        <div style={{ width: "50%" }}>
          <p className={styles.text1}>The new phones are here take a look.</p>
          <p className={styles.text2}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in est dui, aliquam, tempor. Faucibus morbi turpis.
          </p>
          <button className={styles.btn} onClick={() => navigate.push("/allProduct/Phones")}>Explore</button>
        </div>

        <div className="carousel-item active" style={{ width: "50%",cursor:"pointer" }} onClick={() => navigate.push("/allProduct/Phones")}>
          <img
            src="/advertingimg.png"
            className="d-block w-100"
            width={100}
            height={500}
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
