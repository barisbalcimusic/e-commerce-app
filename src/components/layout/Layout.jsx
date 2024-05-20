import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
