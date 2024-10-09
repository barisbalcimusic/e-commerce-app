import { useEffect, useReducer } from "react";
import { useCartContext } from "../contexts/CartContext";

const Counter = ({ product }) => {
  const { cart, setCart } = useCartContext();

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialValue;
      default:
        return state;
    }
  };

  //set amount of the current product as initial value
  const initialValue = cart.find(
    (curr) => curr.product_id === product.product_id
  ).product_amount;

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    if (state) {
      //find the index of the current product in cart
      const existingProductIndex = cart.findIndex(
        (curr) => curr.product_id === product.product_id
      );
      const updatedCart = [...cart];
      //update the amount of the current product
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        product_amount: state,
      };
      setCart(updatedCart);
    }
  }, [state]);

  const handleReset = () => {
    dispatch("reset");
    setCart(cart.filter((curr) => curr.product_id !== product.product_id));
  };

  return (
    <div className="counter">
      <button
        onClick={() => dispatch("decrement")}
        disabled={state <= 1 ? true : false}>
        -
      </button>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={handleReset}>Delete</button>
    </div>
  );
};

export default Counter;
