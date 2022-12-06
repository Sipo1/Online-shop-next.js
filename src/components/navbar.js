import styles from "../../styles/Navbar.module.css";
import { useContext } from 'react';
import AppContext from './context/context';
import MyProfileDropDownAuth from "./ui/dropDowns/myProfileDropDownAuth";
import MyProfileDropDown from "./ui/dropDowns/myProfileDropDownInitial";
import AllProductDropDown from './../../pages/allProduct/index';
import { useRouter } from 'next/router';
import MenuDropDown from "./ui/dropDowns/menuDropDown";
import  useTranslation  from 'next-translate/useTranslation';


const Navbar = () => {
  const { isAuth } = useContext(AppContext)
  const { t } = useTranslation()


  const navigate = useRouter("")
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <AllProductDropDown />
        <p onClick={() => navigate.push("/contactUs")} className={styles.contact}>{t("common:contact")}</p>
        <p onClick={() => navigate.push("/aboutUs")} className={styles.about}>{t("common:about")}</p>
        <p onClick={() => navigate.push("/services")} className={styles.services}>{t("common:services")}</p>
        {isAuth ? <MyProfileDropDownAuth /> : <MyProfileDropDown />}
      </div>
      <div className={styles.menu}>
        <MenuDropDown isAuth={isAuth} />
      </div>
    </div>

  );

};

export default Navbar;

