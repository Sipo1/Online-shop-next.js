import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { footerData } from "../static_data";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';


const Footer = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.infoLeftSide}>
          <div className={styles.informSide}>
            <img unoptimized='true' src="/country.png" className={styles.country} />
            <p className={router.locale == "am" ? styles.footerText1 : styles.footerText}>
              {t("common:footerTitle1")}
              <br />
              {t("common:footerTitle2")}

            </p>
          </div>
        </div>
        <div className={styles.infoRightSide}>
          {footerData.map((item) => (
            <ul key={item.id}>
              <li className={router.locale == "am" ? styles.title1 : styles.title}>
                {t(`common:${item.title}`)}
              </li>
              {item.childrens.map((i, index) => (
                <Link href={i.path} key={index} >
                  <li key={i.id} className={router.locale == "am" ? styles.li1 : styles.li}>{t(`common:${i.name}`)}</li>
                </Link>
              ))
              }
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.footerEnd}>
        <div>
          <span>
            <strong>
              {t("common:footerBottom1")}
            </strong> Azwedo {""}
          </span>
          <img unoptimized='true' src="/arrow.png" className={styles.footImg1} />
        </div>
        <div>
          <span>
            <strong>
              {t("common:footerBottom2")}
            </strong> Webflow {""}
          </span>
          <img unoptimized='true' src="/arrow.png" className={styles.footImg1} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
