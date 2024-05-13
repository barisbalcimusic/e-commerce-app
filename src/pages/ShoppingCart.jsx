import ProductInCart from "../components/product/ProductInCart";
import { useCartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <table className="shopping-cart-table">
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
