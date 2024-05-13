import { useEffect, useState } from "react";
import ProductInCart from "../components/product/ProductInCart";
import { useCartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, product) =>
        acc + parseInt(product.price) * parseInt(product.amount),
      0
    );
    setTotal(totalPrice);
  }, [cart]);

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
              <td colSpan={3}>
                <b>Total: </b>
                {total}$
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && <button>Order</button>}
    </div>
  );
};

export default ShoppingCart;
