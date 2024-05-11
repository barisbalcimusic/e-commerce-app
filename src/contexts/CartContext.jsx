import { createContext, useContext, useState } from "react";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => useContext(cartContext);
