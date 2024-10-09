import "../App.scss";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";

const ProductCard = ({ productId, product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.product_thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <h4>{product.product_title}</h4>
        <p>
          {product.product_description.slice(0, 40)}...
          <Link
            className="details"
            to={`/store/product-detail/${product.product_id}`}>
            details
          </Link>
        </p>
        <p className="rating">
          Rating: <span>{product.product_rating}</span>
        </p>
        <div className="price-div">
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
        <div className="button-div">
          <AddButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
