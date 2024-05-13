import { Link } from "react-router-dom";

const HighlightedProduct = ({ product }) => {
  return (
    <Link to={`store/product-detail/${product.id}`} className="highlight">
      <img src={product.thumbnail} />
      <p className="title">{product.title}</p>
      <p>
        <b>{product.price} $</b>
      </p>
    </Link>
  );
};

export default HighlightedProduct;
