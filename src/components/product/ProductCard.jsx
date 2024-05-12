import { Link } from "react-router-dom";
import "../../App.scss";
import AddButton from "../AddButton";

const ProductCardVer = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <p>
          {product.description.slice(0, 75)}...
          <Link className="details" to={`/store/product-detail/${product.id}`}>
            details
          </Link>
        </p>

        <p className="rating">
          Rating: <span>{product.rating}</span>
        </p>
        <p className="price">
          {product.price}
          <span>$</span>
        </p>
        <div className="button-div">
          <AddButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardVer;
