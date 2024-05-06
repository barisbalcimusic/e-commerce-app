import "../../App.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt="product-thumbnail" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}$</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
