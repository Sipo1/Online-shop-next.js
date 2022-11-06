import styles from "../../styles/Navbar.module.css";
import { useContext } from 'react';
import AppContext from './context/context';
import MyProfileDropDownAuth from "./ui/dropDowns/myProfileDropDownAuth";
import MyProfileDropDown from "./ui/dropDowns/myProfileDropDownInitial";
import AllProductDropDown from './../../pages/allProduct/index';
import { useRouter } from 'next/router';
import MenuDropDown from "./ui/dropDowns/menuDropDown";


const Navbar = () => {
  const { isAuth } = useContext(AppContext)
  const navigate = useRouter("")
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <AllProductDropDown />
        <p onClick={() => navigate.push("/contactUs")} className={styles.contact}>Contact Us</p>
        <p onClick={() => navigate.push("/aboutUs")} className={styles.about}>About Us</p>
        <p onClick={() => navigate.push("/services")} className={styles.services}>Services</p>
        {isAuth ? <MyProfileDropDownAuth /> : <MyProfileDropDown />}
      </div>
      <div className={styles.menu}>
        <MenuDropDown isAuth={isAuth}/>
      </div>
    </div>

  );

};

export default Navbar;

