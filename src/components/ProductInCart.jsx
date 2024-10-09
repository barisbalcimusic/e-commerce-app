import Counter from "./Counter";

const ProductInCart = ({ product }) => {
  return (
    <tr>
      <td className="title-td">{product.product_id}</td>
      <td className="title-td">{product.product_title}</td>
      <td className="price-td">
        {
          // if so show discounted price
          product.product_discountPercentage > 0
            ? (
                product.product_price -
                product.product_price *
                  (product.product_discountPercentage / 100)
              ).toFixed(2)
            : product.product_price
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
