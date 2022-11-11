import styles from "../../styles/Header.module.css";
import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "./context/context";

const Header = () => {
  const { count } = useContext(AppContext);

  return (
    <div className={styles.header}>
      <div className={styles.img}>
        <Link href="/">
          <a>
            <Image
              unoptimized="true"
              src="/country.png"
              width={170}
              height={20}
            />
          </a>
        </Link>
      </div>

      <Navbar />
      <div className={styles.tools}>
        <a href="/#1" title="Вернуться к началу">
          <Image unoptimized="true" src="/search.png" width={35} height={30} />
        </a>

        <Link href="/basket">
          <a>
            <Image
              src="/basket.png"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
