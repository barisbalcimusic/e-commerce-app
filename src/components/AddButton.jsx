import { useEffect, useRef } from "react";
import { useCartContext } from "../contexts/CartContext";
import styled from "styled-components";

const BUTTON = styled.button`
  display:flex;
  justify-content:center;
  alignt-items:center;
  font-weight: bold;
  padding: 10px 30px;
  background-color: orange;
  border: none;
  border-radius: 20px;
  transition: background-color 0.5s 0s linear, color 0.5s 0s linear;
  &:hover {
    cursor: pointer;
    background-color:red;
  }
}
`;

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();
  const buttonRef = useRef();

  const addToCart = () => {
    let productToAdd;
    if (!cart.find((curr) => curr.id === product.id)) {
      productToAdd = { ...product, amount: 1 };
      setCart([...cart, productToAdd]);
    } else {
      const existingProduct = cart.find((curr) => curr.id === product.id);
      const lastAmount = parseInt(existingProduct.amount);
      setCart([
        ...cart.filter((curr) => curr.id !== product.id),
        { ...existingProduct, amount: lastAmount + 1 },
      ]);
    }
    buttonRef.current.style.background = "green";
    buttonRef.current.style.color = "white";
    buttonRef.current.innerText = "Added to Cart!";
  };

  return (
    <BUTTON ref={buttonRef} onClick={addToCart} className="add-button">
      Add to Cart
    </BUTTON>
  );
};

export default AddButton;
