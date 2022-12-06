import styles from "../../../styles/IdeasPart.module.css";
import  useTranslation  from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const IdeasPart = () => {
  let router = useRouter()
  const {t} = useTranslation()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>{t("common:ideasPlace")}</p>
        <p className={styles.text2}>
          {t('common:mostSalledDesc')}
        </p>
      </div>
      <div className={styles.imgAndInfo}>
        <div className={styles.ideaImg}>
          <img unoptimized='true' src="/ideasImg.png" />
        </div>
        <div className={router.locale == "ru" || "am" ? styles.ideaText1 : styles.ideaText}>
          <p>{t("common:ideasline1")}</p>
          <p>{t("common:ideasline2")}</p>
          <p>{t("common:ideasline3")}</p>
          <p>{t("common:ideasline1")}</p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <span>{t("common:seeAll")}</span>
        <img unoptimized='true' src="/arrow.png" className={styles.seeAll} />
      </div>
    </div>
  );
};
export default IdeasPart;
