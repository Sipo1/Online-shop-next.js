
import Header from './header'
import Footer from './footer';
const Leyout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Leyout;
