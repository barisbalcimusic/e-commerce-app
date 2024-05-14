import { useEffect, useState } from "react";
import ProductInCart from "../components/product/ProductInCart";
import { useCartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cart, total, setTotal } = useCartContext();
  const { isLoggedIn } = useAuthContext();
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //calculate total (price*amount)
    const totalPrice = cart.reduce(
      (acc, product) =>
        acc + parseInt(product.price) * parseInt(product.amount),
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleOrder = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <ProductInCart key={product.id} product={product} />
            ))}
            <tr>
              <td className="total-td" colSpan={3}>
                <b>Total: </b>
                {total}$
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <button className="button-style" onClick={handleOrder}>
          Checkout
        </button>
      )}
      {warning && (
        <p className="warning">
          You have to <Link to={"/auth"}>login</Link> or{" "}
          <Link to={"/auth"}>register</Link> to continue{" "}
        </p>
      )}
    </div>
  );
};

export default ShoppingCart;
