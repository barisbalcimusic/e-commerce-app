import styled from "styled-components";
import ProductInCart from "../components/product/ProductInCart";
import { useCartContext } from "../contexts/CartContext";

const TABLE = styled.table`
  border: solid black 1px;
`;

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <h1>Shopping Cart</h1>
      <TABLE className="shopping-cart">
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
      </TABLE>
      <button>Order</button>
    </>
  );
};

export default ShoppingCart;
