
import Header from './header'
import Footer from './footer';
import styles from "../../styles/Header.module.css"
const Leyout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Leyout;
