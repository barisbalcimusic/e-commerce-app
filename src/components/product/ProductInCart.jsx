import Counter from "./Counter";

const ProductInCart = ({ product }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price}$</td>
      <td>
        <Counter product={product} />
      </td>
    </tr>
  );
};

export default ProductInCart;
