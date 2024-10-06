import { useParams } from "react-router-dom";
import AddButton from "../components/AddButton";
import { useProductsContext } from "../contexts/ProductsContext";

const ProductDetail = () => {
  const { products } = useProductsContext();
  const { id } = useParams();

  let filteredProduct;
  if (products) {
    filteredProduct = products.find(
      (product) => parseInt(product.product_id) === parseInt(id)
    );
  }

  return filteredProduct ? (
    <div className="product-detail">
      <p className="title">{filteredProduct.product_title}</p>
      <img src={filteredProduct.product_thumbnail} alt="product-picture" />
      <p>{filteredProduct.product_description}</p>
      <p>
        <b>Rating: </b>
        {filteredProduct.product_rating}
      </p>
      <div className="price-info">
        {" "}
        <p
          className={
            filteredProduct.product_discountPercentage > 0
              ? "old-price"
              : "price"
          }>
          {filteredProduct.product_price} ${" "}
        </p>
        {filteredProduct.product_discountPercentage > 0 && (
          <p className="new-price">
            {
              //calculate discounted price
              (
                filteredProduct.product_price -
                filteredProduct.product_price *
                  (filteredProduct.product_discountPercentage / 100)
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
