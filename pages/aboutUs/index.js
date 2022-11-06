import React from 'react'
import CarouselAbout from '../../src/components/carousel'
import styles from "../../styles/About.module.css"

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBlock}>
        <div className={styles.topBlockLeftSide}>
          <div className={styles.aboutAndImage}>
            <p className={styles.aboutText}>ABOUT US</p>
            <div className={styles.list}>
              <ul  >Customs clearance</ul>
              <li>food,</li>
              <li>seafood,</li>
              <li>Iranian and Turkish vegetables, fruits,</li>
              <li>cars from all over the world, both new and used under Russian registration</li>
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
          <p className={styles.about}>ABOUT US </p>
          <p className={styles.midBlockHeader}>Why You Should Trust Us? Get <br /> Know About Us!</p>
          <p className={styles.midBlocktext}>Commercially known as Arm trans export, an Armenian company founded in 2000.Arm Trans Exports specializes in the trading of dryers, finished products and transportation logistics services to diversified industries. Arm Trans Exports main business centers have been Asia, Europe, but main office in Vanadzor Armenia . Over the years, the company has unfolded worldwide as a trusted trade link providing affordable prices for the customs clearance, logistics and dryers.</p>
          <li>Logistics</li>
          <li>Customs clearance</li>
          <li>Sale of dryers</li>
        </div>
      </div>


      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlockLeftSide}>
          <div>
            <p className={styles.bottomButton}>Features</p>
            <p className={styles.chooseText} >Why Choose Us</p>
            <p className={styles.experienceText} >Thanks to years of hard work, we have gained the trust of our customers.</p>
          </div>
          <div className={styles.parent}>
 
          <div>
            <div className={styles.Experience}>
              <li> Experience</li>
              <li>Specialists</li>
            </div>
            <div className={styles.Experience}>
              <li>Consultation</li>
              <li>24 hours</li>
            </div>
          </div>


            <div >
              <div className={styles.Experience}>
                <li> Quality</li>
                <li>Positive</li>
              </div>

              <div className={styles.Experience}>
                <li>Support</li>
                <li>Services</li>
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