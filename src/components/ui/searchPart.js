import styles from "../../../styles/SearchPart.module.css";
import Image from "next/image";

const SearchPart = () => {
  const buttonList = [
    "iPhone",
    "Charger",
    "Gift",
    "Google Pixel 3",
    "Keyboard",
    "13 Pro Max",
    "iPhone 12",
    "Laptop",
    "Mobile",
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchPart}>
        <p className={styles.text}>Looking for anything else?</p>
        <input placeholder="Search keyword" className={styles.input} />
      </div>
      <div className={styles.btnWrapper}>
        <div className={styles.innerBlock}>
          {buttonList.map((btn, i) => {
            return (
              <button className={styles.btn} key={i}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchPart;
