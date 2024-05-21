import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSidebarContext } from "../../contexts/SidebarContext";

const Layout = ({ children }) => {
  const location = useLocation();
  const { isSidebarOpened, headerRef, sidebarRef } = useSidebarContext();

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = parseInt(getComputedStyle(headerRef.current).height);
      const asideHeight = parseInt(getComputedStyle(sidebarRef.current).height);
      const limit = asideHeight - window.innerHeight + headerHeight;
      console.log(limit);
      if (window.scrollY > limit) {
        window.scrollTo(0, limit);
      }
    };

    if (isSidebarOpened) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSidebarOpened]);

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
