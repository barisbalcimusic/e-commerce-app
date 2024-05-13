import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <cartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => useContext(cartContext);
