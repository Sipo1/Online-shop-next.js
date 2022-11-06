import { useContext } from "react";
import AppContext from '../../context/context';
import styles from "../../../../styles/MyProfileDropDown.module.css";
import Link from 'next/link';
import { DropdownItem } from "reactstrap";

const LogOut = () => {
  const { setIsAuth } = useContext(AppContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('token');
  }
  return (
    <Link href={"/login"} >
      <a className={styles.a} onClick={logout} >
        <DropdownItem >LogOut </DropdownItem>  
      </a>
    </Link>
  )
}
export default LogOut