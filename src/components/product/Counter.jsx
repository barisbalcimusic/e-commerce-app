import { useReducer } from "react";
import { useCartContext } from "../../contexts/CartContext";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      state;
  }
};

const Counter = ({ product }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { cart, setCart } = useCartContext();

  const handleReset = () => {
    dispatch("reset");
    setCart(cart.filter((curr) => curr.id !== product.id));
  };

  return (
    <div className="counter">
      <button
        onClick={() => dispatch("decrement")}
        disabled={state <= 0 ? true : false}>
        -
      </button>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={handleReset}>Delete</button>
    </div>
  );
};

export default Counter;
