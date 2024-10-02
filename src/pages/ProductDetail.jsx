import { useParams } from "react-router-dom";
import AddButton from "../components/AddButton";
import { useProductsContext } from "../contexts/ProductsContext";

const ProductDetail = () => {
  const { products } = useProductsContext();
  const { id } = useParams();

  let filteredProduct;
  if (products) {
    filteredProduct = products.find(
      (product) => parseInt(product.id) === parseInt(id)
    );
  }

  return filteredProduct ? (
    <div className="product-detail">
      <p className="title">{filteredProduct.title}</p>
      <img src={filteredProduct.thumbnail} alt="product-picture" />
      <p>{filteredProduct.description}</p>
      <p>
        <b>Rating: </b>
        {filteredProduct.rating}
      </p>
      <div className="price-info">
        {" "}
        <p
          className={
            filteredProduct.discountPercentage > 0 ? "old-price" : "price"
          }>
          {filteredProduct.price} ${" "}
        </p>
        {filteredProduct.discountPercentage > 0 && (
          <p className="new-price">
            {
              //calculate discounted price
              (
                filteredProduct.price -
                filteredProduct.price *
                  (filteredProduct.discountPercentage / 100)
              ).toFixed(2)
            }{" "}
            $
          </p>
        )}
      </div>
      <AddButton product={filteredProduct} />
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default ProductDetail;
