import { useContext } from "react";
import AppContext from '../../context/context';
import styles from "../../../../styles/MyProfileDropDown.module.css";
import Link from 'next/link';
import { DropdownItem } from "reactstrap";
import  useTranslation  from 'next-translate/useTranslation';


const LogOut = () => {
  const { setIsAuth } = useContext(AppContext);
  const {t} = useTranslation()

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('token');
  }
  return (
    <Link href={"/login"} >
      <a className={styles.a} onClick={logout} >
        <DropdownItem >{t("common:logOut")} </DropdownItem>  
      </a>
    </Link>
  )
}
export default LogOut