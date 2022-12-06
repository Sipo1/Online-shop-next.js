import styles from "../../../styles/Categories.module.css";
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const Categories = () => {
  const { t } = useTranslation()


  const navigate = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>{t("common:categoryTitle")}</p>
        <p className={styles.text2}>
          {t("common:categoryDesc1")}
          <br />
          {t("common:categoryDesc2")}
        </p>
      </div>
      <div className={styles.categories} >
        <div className={styles.leftSide}>
          <div className={styles.leftSideLaptop} onClick={() => navigate.push("/allProduct/Laptops")}>
            <div className={styles.img}>
              <img unoptimized='true' src="/notebook.png" className={styles.notebookImg} />
            </div>
            <div className={styles.laptopDescBlock}>
              <p className={styles.laptopName}>{t("common:categoryLaptops")}</p>
              <p className={styles.laptopDesc}>
                {t("common:categoryLaptopsDesc1")}
                <br />
                {t("common:categoryLaptopsDesc2")}
              </p>
            </div>
          </div>
          <div className={styles.leftSideWatch} onClick={() => navigate.push("//allProduct/Watches")}>
            <div className={styles.watchImg}>
              <img unoptimized='true' src="/watch.png" className={styles.watchImgimg} />
            </div>
            <div className={styles.watchText}>
              <p className={styles.watchName}>{t("common:categoryWatches")}</p>
              <p className={styles.watchDesc}>
                {t("common:categoryWatchDesc1")}
                <br />
                {t("common:categoryWatchDesc2")}


              </p>
            </div>
          </div>
        </div>


        <div className={styles.rightSide}>
          <div className={styles.rigthPhoneSide} onClick={() => navigate.push("//allProduct/Phones")}>
            <div className={styles.rigthPhoneImg}>
              <img unoptimized='true' src="/twoPhons.png" className={styles.twoPhonesImg} />
            </div>
            <div className={styles.rigthPhoneText}>
              <p className={styles.rigthPhoneText1}>{t("common:categoryPhones")}</p>
              <p className={styles.phoneDesc}>
                {t("common:categoryPhonesDesc1")}
                <br />
                {t("common:categoryPhonesDesc2")}
              </p>
            </div>
          </div>

          <div className={styles.ipadSide} onClick={() => navigate.push("/allProduct/Ipads")}>
            <div className={styles.ipadTextBlock}>
              <p className={styles.ipadText1}>{t("common:categoryTablets")}</p>
              <p className={styles.IpadDesc}>
                {t("common:categoryTabletsDesc1")}
                <br />
                {t("common:categoryTabletsDesc2")}
              </p>
            </div>
            <div className={styles.ipadImgBlock}>
              <img unoptimized='true' src="/ipadd.png" className={styles.ipadImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
