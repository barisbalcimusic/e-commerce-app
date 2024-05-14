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
      {/* <p className="price">{filteredProduct.price} $</p> */}
      <p
        className={
          filteredProduct.discountPercentage > 0 ? "old-price" : "price"
        }
      >
        {filteredProduct.price} ${" "}
      </p>
      {filteredProduct.discountPercentage > 0 && (
        <p className="new-price">
          {
            //calculate discounted price
            (
              filteredProduct.price -
              filteredProduct.price * (filteredProduct.discountPercentage / 100)
            ).toFixed(2)
          }{" "}
          $
        </p>
      )}
      <AddButton product={filteredProduct} />
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default ProductDetail;
