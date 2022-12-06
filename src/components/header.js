import styles from "../../styles/Header.module.css";
import Navbar from "./navbar";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "./context/context";
import LanguagesDropDown from "./ui/dropDowns/languagesDropDown";

const Header = () => {
  const { count } = useContext(AppContext);

  return (
    <div className={styles.header}>
      
      <div className={styles.img}>
        <Link href="/">
          <a>
            <img
              className={styles.countryImg}
              unoptimized="true"
              src="/country.png"
              
            />
          </a>
        </Link>
      </div>

      <Navbar />
      <LanguagesDropDown/>

      <div className={styles.tools}>
        <a href="/#1" title="Вернуться к началу">
          <img className={styles.searchImg}  unoptimized="true" src="/search.png"  />
        </a>

        <Link href="/basket">
          <a>
            <img 
            className={styles.basketImg}
              src="/basket.png"
              
              style={{ cursor: "pointer" }}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
