import { useRef } from "react";
import { useCartContext } from "../contexts/CartContext";

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();
  
  const buttonRef = useRef();

  const addToCart = () => {
    let productToAdd;
    if (!cart.find((curr) => curr.id === product.id)) {
      productToAdd = { ...product, amount: 1 };
      setCart([...cart, productToAdd]);
    } else {
      //find the product in cart
      const existingProduct = cart.find((curr) => curr.id === product.id);
      //get the amount of the product
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
    <button ref={buttonRef} onClick={addToCart} className="add-button">
      Add to Cart
    </button>
  );
};

export default AddButton;
