import { createContext, useContext, useRef, useState } from "react";

const sidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const sidebarRef = useRef();

  const handleSidebarClick = () => {
    sidebarRef.current.style.transform = `translateX(${
      isSidebarOpened ? "-100vw" : "100vw"
    })`;
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <sidebarContext.Provider
      value={{ isSidebarOpened, handleSidebarClick, sidebarRef }}>
      {children}
    </sidebarContext.Provider>
  );
};

export default SidebarContextProvider;

export const useSidebarContext = () => useContext(sidebarContext);
