import Image from "next/image";
import styles from "../../../styles/Categories.module.css";
import { useRouter } from 'next/router';

const Categories = () => {
  const navigate = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}> Shop our latest offers and categories</p>
        <p className={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam,
          <br /> tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.categories} >
        <div className={styles.leftSide}>
          <div className={styles.leftSideLaptop} onClick={() => navigate.push("/allProduct/Laptops")}>
            <div className={styles.img}>
              <Image unoptimized src="/notebook.png" width={350} height={290} />
            </div>
            <div className={styles.laptopDesc}>
              <p className={styles.laptopName}>Laptops</p>
              <p className={styles.laptopDesc}>
                True Laptop <br />
                Solution
              </p>
            </div>
          </div>
          <div className={styles.leftSideWatch} onClick={() => navigate.push("//allProduct/Watches")}>
            <div className={styles.watchImg}>
              <Image unoptimized src="/watch.png" width={250} height={200} />
            </div>
            <div className={styles.watchText}>
              <p className={styles.watchName}>Watch</p>
              <p className={styles.laptopDesc}>
                Not just <br />
                stylisht
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rigthPhoneSide} onClick={() => navigate.push("//allProduct/Phones")}>
            <div className={styles.rigthPhoneImg}>
              <Image unoptimized src="/twoPhons.png" width={250} height={200} />
            </div>
            <div className={styles.rigthPhoneText}>
              <p className={styles.rigthPhoneText1}>Phones</p>
              <p className={styles.laptopDesc}>
                Your day to day <br /> life
              </p>
            </div>
          </div>
          <div className={styles.ipadSide} onClick={() => navigate.push("/allProduct/Ipads")}>
            <div>
              <p className={styles.ipadText1}>Tablet</p>
              <p className={styles.laptopDesc}>Empower your <br /> work</p>
            </div>
            <div>
              <Image unoptimized src="/ipadd.png" width={250} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
