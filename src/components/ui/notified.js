import Image from "next/image";
import styles from "../../../styles/NotifiedPart.module.css";

const NotifiedPart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>Never miss a thing</p>
        <p className={styles.text2}>
          Sign up for texts to be notified about our best offers on the perfect
          gifts.
        </p>
      </div>
      <div className={styles.img}>
        <Image unoptimized='true' src="/sendmail.png" width={233} height={200} />
      </div>
      <div className={styles.input}>
        <input placeholder="Your email" />
        <button>Sign up</button>
      </div>
    </div>
  );
};
export default NotifiedPart;
