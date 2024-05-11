import { Link } from "react-router-dom";
import "../../App.scss";
import AddButton from "../AddButton";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="price">
          {product.price}
          <span>$</span>
        </p>
        <AddButton product={product} />
        <Link className="details" to={`/store/product-detail/${product.id}`}>
          see more details...
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
