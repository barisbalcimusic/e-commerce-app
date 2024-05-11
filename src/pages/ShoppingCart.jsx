import ProductInCart from "../components/product/ProductInCart";
import { useCartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <h1>Shopping Cart</h1>
      <table className="shopping-cart">
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
      <button>Order</button>
    </>
  );
};

export default ShoppingCart;
