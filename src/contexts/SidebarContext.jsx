import { createContext, useContext, useRef, useState } from "react";

const SidebarContext = createContext();

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
    <SidebarContext.Provider
      value={{ isSidebarOpened, handleSidebarClick, sidebarRef }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
export const useSidebarContext = () => useContext(SidebarContext);
