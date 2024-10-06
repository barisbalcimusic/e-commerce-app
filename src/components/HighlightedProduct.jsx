import { Link } from "react-router-dom";

const HighlightedProduct = ({ product }) => {
  return (
    <Link
      to={`store/product-detail/${product.product_id}`}
      className="highlight">
      <img src={product.product_thumbnail} alt="product-thumbnail" />
      <div className="product-infos">
        <p className="title">{product.product_title}</p>
        <p
          className={
            product.product_discountPercentage > 0 ? "old-price" : "price"
          }>
          {product.product_price} $
        </p>
        {product.product_discountPercentage > 0 && (
          <p className="new-price">
            {
              //calculate discounted price
              (
                product.product_price -
                product.product_price *
                  (product.product_discountPercentage / 100)
              ).toFixed(2)
            }{" "}
            $
          </p>
        )}
      </div>
    </Link>
  );
};

export default HighlightedProduct;
