import React from 'react'
import CarouselAbout from '../../src/components/carousel'
import useTranslation from 'next-translate/useTranslation';
import styles from "../../styles/About.module.css"

function About() {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBlock}>
        <div className={styles.topBlockLeftSide}>
          <div className={styles.aboutAndImage}>
            <p className={styles.aboutText}>{t("common:aboutTitle")}</p>
            <div className={styles.list}>
              <ul>{t("common:aboutCustom")}</ul>
              <li>{t("common:aboutFood")}</li>
              <li>{t("common:aboutSeafood")}</li>
              <li>{t("common:aboutIranian")}</li>
              <li>{t("common:aboutCars")}</li>
            </div>
          </div>

        </div>
        <div className={styles.topBlockRightSide}>
          <CarouselAbout />
        </div>
      </div>


      <div className={styles.midBlock}>
        <div className={styles.midBlockLeftSide}>
          <img src='/about-1.jpg' className={styles.firstImage} />
          <img src='/about-2.jpg' className={styles.secondImage} />
        </div>
        <div className={styles.midBlockRightSide}>
          <p className={styles.about}>{t("common:aboutTitle")} </p>
          <p className={styles.midBlockHeader}>
            {t("common:aboutShould")}
            <br />
            {t("common:aboutKnow")}
          </p>
          <p className={styles.midBlocktext}>{t("common:aboutMidBlocktext")}</p>
          <li>{t("common:aboutLogistics")}</li>
          <li>{t("common:aboutCustom")}</li>
          <li>{t("common:aboutSale")}</li>
        </div>
      </div>


      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlockLeftSide}>
          <div>
            <p className={styles.bottomButton}>{t("common:aboutFeatures")}</p>
            <p className={styles.chooseText} >{t("common:aboutWhyChooseUs")}</p>
            <p className={styles.experienceText} >{t("common:aboutThanksToYears")}</p>
          </div>
          <div className={styles.parent}>

            <div>
              <div className={styles.Experience}>
                <li>{t("common:aboutExperience")}</li>
                <li>{t("common:aboutSpecialists")}</li>
              </div>
              <div className={styles.Experience}>
                <li>{t("common:aboutConsultation")}</li>
                <li>{t("common:about24Hours")}</li>
              </div>
            </div>


            <div >
              <div className={styles.Experience}>
                <li>{t("common:aboutQuality")}</li>
                <li>{t("common:aboutPositive")}</li>
              </div>

              <div className={styles.Experience}>
                <li>{t("common:aboutSupport")}</li>
                <li>{t("common:aboutServices")}</li>
              </div>
            </div>


          </div>
        </div>
        <div className={styles.bottomBlockRightSide}>
          <img src='/about-1.jpg' className={styles.map} />
        </div>
      </div>
    </div>
  )
}

export default About