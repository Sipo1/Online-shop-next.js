import styles from "../../../styles/NotifiedPart.module.css";
import  useTranslation  from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const NotifiedPart = () => {
  const {t} = useTranslation()
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>{t("common:missThing")}</p>
        <p className={styles.text2}>{t("common:signForNotified")}</p>
      </div>
      <div className={styles.img}>
        <img unoptimized='true' src="/sendmail.png"  className={styles.sendEmailImg}   />
      </div>
      <div className={styles.input}>
        <input  placeholder={t("common:yourEmail")} />
        <button className={router.locale == "en" ? styles.signUpBtn : styles.signUpBtn1}>{t("common:signUp")}</button>
      </div>
    </div>
  );
};
export default NotifiedPart;
