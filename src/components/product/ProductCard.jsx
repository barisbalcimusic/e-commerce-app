import { Link } from "react-router-dom";
import "../../App.scss";
import AddButton from "../AddButton";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/store/product-detail/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}$</p>
        <AddButton />
      </div>
    </Link>
  );
};

export default ProductCard;
