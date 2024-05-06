import { Link } from "react-router-dom";

const BestRatedProduct = ({ product }) => {
  return (
    <div className="best-rated-product">
      <img src={product.thumbnail} />
      <Link>{product.title}</Link>
      <p>Rating: {product.rating}</p>
      <p>
        <b>{product.price} $</b>
      </p>
    </div>
  );
};

export default BestRatedProduct;
