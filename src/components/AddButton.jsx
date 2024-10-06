import { useRef } from "react";
import { useCartContext } from "../contexts/CartContext";

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();

  const buttonRef = useRef();

  const { product_id, product_price } = product;

  const handleAddToCart = () => {
    let productToAdd;

    // check if the product is already in cart
    const existingProduct = cart.find((curr) => curr.product_id === product_id);

    if (!existingProduct) {
      productToAdd = {
        product_id,
        product_price: parseFloat(product_price),
        product_amount: 1,
      };
      setCart([...cart, productToAdd]);
    } else {
      // get the amount of the product
      const lastAmount = parseInt(existingProduct.product_amount);
      // update the amount of the product
      setCart([
        ...cart.filter((curr) => curr.product_id !== product_id),
        { ...existingProduct, product_amount: lastAmount + 1 },
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
