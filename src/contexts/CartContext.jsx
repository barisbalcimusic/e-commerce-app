import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export const useCartContext = () => useContext(CartContext);
