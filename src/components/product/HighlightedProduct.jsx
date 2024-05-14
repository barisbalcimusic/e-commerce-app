import { Link } from "react-router-dom";

const HighlightedProduct = ({ product }) => {
  return (
    <Link to={`store/product-detail/${product.id}`} className="highlight">
      <img src={product.thumbnail} />
      <p className="title">{product.title}</p>
      <p className={product.discountPercentage > 0 ? "old-price" : "price"}>
        {product.price} $
      </p>
      {product.discountPercentage > 0 && (
        <p className="new-price">
          {
            //calculate discounted price
            (
              product.price -
              product.price * (product.discountPercentage / 100)
            ).toFixed(2)
          }{" "}
          $
        </p>
      )}
    </Link>
  );
};

export default HighlightedProduct;
