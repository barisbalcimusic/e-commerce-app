import Counter from "./Counter";

const ProductInCart = ({ product }) => {
  return (
    <tr>
      <td className="title-td">{product.title}</td>
      <td className="price-td">
        {
          // if so show discounted price
          product.discountPercentage > 0
            ? (
                product.price -
                product.price * (product.discountPercentage / 100)
              ).toFixed(2)
            : product.price
        }{" "}
        $
      </td>
      <td>
        <Counter product={product} />
      </td>
    </tr>
  );
};

export default ProductInCart;
