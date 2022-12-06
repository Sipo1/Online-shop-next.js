import styles from "../../../styles/TheBestItems.module.css";
import { bestItemsData } from "../../static_data";
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const TheBestItems = () => {
  const { t } = useTranslation()

  const navigate = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>
        {t("common:theBestTitle")}
        </p>
        <p className={styles.text2}>
        {t("common:theBestDesc")}
          
        </p>
      </div >
      <div className={styles.cardWrapper} >
        {bestItemsData.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardTopSide}>
                <p className={styles.cardText1}>
                {t(`common:${item.text1}`)}
                  
                  </p>
                <p className={styles.cardText2}>
                {t(`common:${item.text2}`)}
                </p>
                <button className={styles.cardBtn} onClick={() => navigate.push(`${item.path}`)}>{t(`common:AdvBtn`)}</button>
              </div>
              <div className={styles.cardImage}>
                <img unoptimized='true' src={item.img} className={styles.cardPicture} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TheBestItems;
