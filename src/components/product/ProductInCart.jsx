import Counter from "./Counter";

const ProductInCart = ({ product }) => {
  return (
    <tr>
      <td className="title-td">{product.title}</td>
      <td className="price-td">{product.price} $</td>
      <td>
        <Counter product={product} />
      </td>
    </tr>
  );
};

export default ProductInCart;
