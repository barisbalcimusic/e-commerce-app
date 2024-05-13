import { useReducer } from "react";
import { useCartContext } from "../../contexts/CartContext";
import styled from "styled-components";

const DIV = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 10px;
}`;

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
    <DIV className="counter">
      <button
        onClick={() => dispatch("decrement")}
        disabled={state <= 0 ? true : false}>
        -
      </button>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={handleReset}>Delete</button>
    </DIV>
  );
};

export default Counter;
