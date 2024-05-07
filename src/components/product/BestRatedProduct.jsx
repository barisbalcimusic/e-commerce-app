import { Link } from "react-router-dom";

const BestRatedProduct = ({ product }) => {
  return (
    <Link
      to={`store/product-detail/${product.id}`}
      className="best-rated-product">
      <img src={product.thumbnail} />
      <p className="title">{product.title}</p>
      <p>
        <b>{product.price} $</b>
      </p>
    </Link>
  );
};

export default BestRatedProduct;
