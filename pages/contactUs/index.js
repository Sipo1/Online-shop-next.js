import React from 'react'
import styles from "../../styles/Contact.module.css"

function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src='https://c8.alamy.com/comp/FYH033/render-of-a-group-of-gadgets-tablet-pc-smart-phone-laptop-smart-watch-FYH033.jpg' />
      </div>
      <div className={styles.contact}>
        <div className={styles.contacts}>
          <div><img src="https://img.icons8.com/ios/50/000000/find-clinic.png" /></div>
          <div>
            <p>Adress</p>
            <p>Address: Tigran Mec 18</p>
            <p>Vanadzor 2022</p>
          </div>
        </div>

        <div className={styles.contacts}>
          <div><img src="https://img.icons8.com/metro/26/000000/missed-call.png" /></div>
          <div>
            <p>Call Us Now</p>
            <p>+374 93 13 25 85</p>
            <p>+7 965 444-45-11</p>
          </div>
        </div>

        <div className={styles.contacts}>
          <div><img src="https://img.icons8.com/puffy/32/000000/experimental-filled-message-puffy.png" /></div>
          <div>
            <p>Mail Us Now</p>
            <p>info@armtransexport.com</p>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <div className={styles.formData}>
          <div className={styles.header}>
            <p className={styles.button}>Contact Us</p>
            <p className={styles.headerText}>Have Any Query? Please <br /> Contact Us!</p>
          </div>
          <div className={styles.formInput}>
            <div className={styles.nameInput}>
              <input placeholder='Your Name' />
              <input placeholder='Your Email' />
            </div>
            <input className={styles.subject} placeholder='Subject' />
            <input className={styles.message} placeholder='Message' />
            <button className={styles.send}>Send</button>
          </div>
        </div>
        <div className={styles.iframe}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48312.75506081758!2d44.47493075!3d40.81594315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041bc1cc2a9ec57%3A0x34e4f0c6190c7ff4!2z0JLQsNC90LDQtNC30L7RgA!5e0!3m2!1sru!2s!4v1667462669740!5m2!1sru!2s"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact