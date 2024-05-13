import { useEffect, useReducer } from "react";
import { useCartContext } from "../../contexts/CartContext";

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
  const initialValue = cart.find((curr) => curr.id === product.id).amount;

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    if (state) {
      //find the current product in cart
      const existingProduct = cart.find((curr) => curr.id === product.id);
      //remove the current product from cart
      const cartWithoutCurr = [
        ...cart.filter((curr) => curr.id !== product.id),
      ];
      //update cart with the new amount of curren product
      setCart([...cartWithoutCurr, { ...existingProduct, amount: state }]);
    }
  }, [state]);

  const handleReset = () => {
    dispatch("reset");
    setCart(cart.filter((curr) => curr.id !== product.id));
  };

  return (
    <div className="counter">
      <button
        onClick={() => dispatch("decrement")}
        disabled={state <= 1 ? true : false}
      >
        -
      </button>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={handleReset}>Delete</button>
    </div>
  );
};

export default Counter;
