import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/ProductsContext";
import AddButton from "../components/AddButton";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductsContext();

  let filteredProduct;
  if (products) {
    filteredProduct = products.filter(
      (product) => parseInt(product.id) === parseInt(id)
    )[0];
  }

  return filteredProduct ? (
    <div className="product-detail">
      <p className="title">{filteredProduct.title}</p>
      <img src={filteredProduct.thumbnail} alt="product-picture" />
      <p>{filteredProduct.description}</p>
      <p>{filteredProduct.price} $</p>
      <AddButton product={filteredProduct} />
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default ProductDetail;
