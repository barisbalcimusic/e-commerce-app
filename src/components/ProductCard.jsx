import "../App.scss";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} alt="" />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price} TL</p>
    </div>
  );
};

export default ProductCard;
