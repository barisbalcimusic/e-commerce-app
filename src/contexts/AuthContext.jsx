import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <authContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(authContext);
