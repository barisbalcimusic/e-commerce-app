import { useRef } from "react";
import { useCartContext } from "../contexts/CartContext";

const AddButton = ({ product }) => {
  const { cart, setCart } = useCartContext();
  const buttonRef = useRef();

  //! funktioniert aber nicht gut und unvollständig
  const handleClick = () => {
    if (cart.filter((curr) => curr.id === product.id).length === 0) {
      setCart([...cart, product]);
    } else {
      alert();
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
    <button ref={buttonRef} onClick={handleClick} className="add-button">
      Add to Cart
    </button>
  );
};

export default AddButton;
