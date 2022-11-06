import Image from "next/image";
import styles from "../../../styles/TheBestItems.module.css";
import { bestItemsData } from "../../static_data";
import { useRouter } from 'next/router';

const TheBestItems = () => {
  const navigate = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>See the best around here</p>
        <p className={styles.text2} >Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div >
      <div className={styles.cardWrapper} >
        {bestItemsData.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardTopSide}>
                <p className={styles.cardText1}  >{item.text1}</p>
                <p className={styles.cardText2} >{item.text2}</p>
                <button className={styles.cardBtn} onClick={() => navigate.push(`${item.path}`)}>Explore</button>
              </div>
              <div className={styles.cardImage}>
                <Image unoptimized src={item.img} width={200} height={200} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TheBestItems;
