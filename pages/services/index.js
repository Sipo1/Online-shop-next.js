import React from "react";
import styles from "../../styles/Services.module.css";
import  useTranslation  from 'next-translate/useTranslation';

const Services = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w"
        />
      </div>

      <div className={styles.midSection}>
         <div className={styles.titleBlock}>
           <p className={styles.midSectionTitle}>{t("common:services")}</p>
         </div>

        <div className={styles.cardWrapper}>
          <div className={styles.cardBlock}>
            <div className={styles.card}>
              <div className={styles.iconBlock}>
                <img
                  className={styles.iconImg}
                  src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png"
                />
              </div>
              <p className={styles.custom}>{t("common:Phones")}</p>
              <p className={styles.desc}>
                International customs clearance of documents - legal support of
                all processes carried out during the transportation of goods
                through the customs authorities.
              </p>
              <button className={styles.respBtn}>More</button>

              <div className={styles.btnBlock}>
                <button className={`${styles.iconbtn} ${styles.addbtn}`}>
                  <div className={styles.addicon}></div>
                  <div className={styles.btntxt}> More</div>
                </button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconBlock}>
                <img
                  className={styles.iconImg}
                  src="https://img.icons8.com/material-outlined/24/null/checked-laptop.png"
                />
              </div>
              <p className={styles.custom}> {t("common:Laptops")}</p>
              <p className={styles.desc}>
                International customs clearance of documents - legal support of
                all processes carried out during the transportation of goods
                through the customs authorities.
              </p>
              <button className={styles.respBtn}>More</button>

              <div className={styles.btnBlock}>
                <button className={`${styles.iconbtn} ${styles.addbtn}`}>
                  <div className={styles.addicon}></div>
                  <div className={styles.btntxt}> More</div>
                </button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconBlock}>
                <img
                  className={styles.iconImg}
                  src="https://img.icons8.com/material-outlined/24/null/electronics.png"
                />
              </div>
              <p className={styles.custom}>{t("common:electronics")}</p>
              <p className={styles.desc}>
                International customs clearance of documents - legal support of
                all processes carried out during the transportation of goods
                through the customs authorities.
              </p>
              <button className={styles.respBtn}>More</button>

              <div className={styles.btnBlock}>
                <button className={`${styles.iconbtn} ${styles.addbtn}`}>
                  <div className={styles.addicon}></div>
                  <div className={styles.btntxt}> More</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactBlock}>
          <div className={styles.aboutUs}>
            <p className={styles.aboutText}>{t("common:appointment")}</p>
            <p className={styles.aboutTitle}>{t("common:appointmentManagers")}
            
            </p>
            <div className={styles.us}>
              <div className={styles.callUs}>
                <div className={styles.numberBlock}>
                  <div className={styles.callIcon} >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png" />
                  </div>
                  <div>
                    <p className={styles.callText1}>{t("common:ContactCallUs")}</p>
                    <p className={styles.callText2} >+7 965 444-45-11</p>
                  </div>
                </div>
              </div>
              <div className={styles.mailUs}>
                <div className={styles.numberBlock}>
                  <div className={styles.callIcon} >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/mac-os.png" />
                  </div>
                  <div>
                    <p className={styles.callText1}>{t("common:ContactMailText")}</p>
                    <p className={styles.callText2} >info@armtransexport.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactUs}>
            <div className={styles.contactInner}>
              <div className={styles.contactInputs}>
                <div className={styles.leftSideInputContacts}>
                  <input placeholder={t("common:ContactYname")} />
                  <input placeholder={t("common:ContactYemail")} />
                </div>

                <div className={styles.rightSideInputContacts}>
                  <input placeholder={t("common:ContactYSurname")} />
                  <input placeholder={t("common:ContactYMobile")} />
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <input />
              </div>

              <button className={styles.btnContact}>{t("common:bookAppoint")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
