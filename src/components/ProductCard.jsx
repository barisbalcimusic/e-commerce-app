import "../App.scss";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";

const ProductCard = ({ productId, product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>
          {product.description.slice(0, 40)}...
          <Link className="details" to={`/store/product-detail/${product.id}`}>
            details
          </Link>
        </p>
        <p className="rating">
          Rating: <span>{product.rating}</span>
        </p>
        <div className="price-div">
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
        </div>
        <div className="button-div">
          <AddButton productInfo={{ productId, product }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
