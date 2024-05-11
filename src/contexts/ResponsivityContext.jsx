import { createContext, useContext, useEffect, useState } from "react";

const responsitityContext = createContext();

const ResponsivityContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 431);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <responsitityContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </responsitityContext.Provider>
  );
};

export default ResponsivityContextProvider;

export const useResponsivityContext = () => useContext(responsitityContext);
