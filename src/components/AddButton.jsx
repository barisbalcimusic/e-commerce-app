import { useRef } from "react";
import { useCartContext } from "../contexts/CartContext";

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();

  const buttonRef = useRef();

  const { id, price } = product;

  const handleAddToCart = () => {
    let productToAdd;

    // check if the product is already in cart
    const existingProduct = cart.find((curr) => curr.id === id);

    if (!existingProduct) {
      productToAdd = { id, price: parseFloat(price), amount: 1 };
      setCart([...cart, productToAdd]);
    } else {
      // get the amount of the product
      const lastAmount = parseInt(existingProduct.amount);
      // update the amount of the product
      setCart([
        ...cart.filter((curr) => curr.id !== id),
        { ...existingProduct, amount: lastAmount + 1 },
      ]);
    }
    buttonRef.current.style.background = "green";
    buttonRef.current.style.color = "white";
    buttonRef.current.innerText = "Added to Cart!";
  };

  return (
    <button ref={buttonRef} onClick={handleAddToCart} className="add-button">
      Add to Cart
    </button>
  );
};

export default AddButton;
