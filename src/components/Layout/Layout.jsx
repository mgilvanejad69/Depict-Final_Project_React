import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children ,addToCard}) => {
  return (
    <>
      <Header addToCard={addToCard}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
