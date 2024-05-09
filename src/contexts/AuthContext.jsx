import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <authContext.Provider value={{ setIsLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(authContext);
