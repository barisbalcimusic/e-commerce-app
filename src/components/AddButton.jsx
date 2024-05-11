import { useEffect, useRef } from "react";
import { useCartContext } from "../contexts/CartContext";

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();
  const buttonRef = useRef();

  const addToCart = () => {
    const productToAdd = cart.find((curr) => curr.id === product.id);
    if (productToAdd) {
      productToAdd.amount += 1;
      setCart(
        [...cart].filter((curr) => curr.id !== product.id),
        { id: product.id, title: product.title, amount: productToAdd.amount }
      );
    } else {
      setCart([...cart], {
        id: product.id,
        title: product.title,
        amount: 1,
      });
    }

    buttonRef.current.style.background = "green";
    buttonRef.current.style.color = "white";
    buttonRef.current.innerText = "Added to Cart!";
    // setTimeout(() => {
    //   buttonRef.current.style.background = "#f79824";
    //   buttonRef.current.style.color = "black";
    //   buttonRef.current.innerText = "Add to Cart";
    // }, 3000);
  };

  return (
    <button ref={buttonRef} onClick={addToCart} className="add-button">
      Add to Cart
    </button>
  );
};

export default AddButton;
