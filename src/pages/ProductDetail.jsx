import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/ProductsContext";
import AddButton from "../components/AddButton";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductsContext();

  let selectedProduct;
  if (products) {
    selectedProduct = products.filter((product) => product.id === parseInt(id));
  }
  return selectedProduct ? (
    <div className="product-detail">
      <p className="title">{selectedProduct[0].title}</p>
      <img src={selectedProduct[0].thumbnail} alt="product-picture" />
      <p>{selectedProduct[0].price} $</p>
      <AddButton />
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default ProductDetail;
