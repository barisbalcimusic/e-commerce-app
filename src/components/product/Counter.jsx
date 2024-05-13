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
        state;
    }
  };

  //set amount of product in cart as initial value
  const initialValue = cart.find((curr) => curr.id === product.id).amount;

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    if (state) {
      const existingProduct = cart.find((curr) => curr.id === product.id);
      const lastAmount = parseInt(existingProduct.amount);
      setCart([
        ...cart.filter((curr) => curr.id !== product.id),
        { ...existingProduct, amount: state },
      ]);
      console.log(state);
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
        disabled={state <= 0 ? true : false}
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
