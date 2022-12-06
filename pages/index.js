import HomePageUi from "../src/components/homePageUi";
import styles from "../styles/Home.module.css";
import React, { forwardRef } from 'react';

const Home = forwardRef(() => {
  

  return (
    <div className={styles.global}>
      <HomePageUi />
    </div>
  );
})

export default Home

