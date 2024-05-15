import { createContext, useContext, useEffect, useState } from "react";

const ResponsitityContext = createContext();

const ResponsivityContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1067);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    const handleLoad = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [isMobile]);

  return (
    <ResponsitityContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </ResponsitityContext.Provider>
  );
};

export default ResponsivityContextProvider;
export const useResponsivityContext = () => useContext(ResponsitityContext);
