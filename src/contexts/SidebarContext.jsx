import { createContext, useContext } from "react";

const sidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  return <sidebarContext.Provider value={}> {children}</sidebarContext.Provider>;
};

export default SidebarContext;

export const useSidebarContext = () => useContext(sidebarContext);
