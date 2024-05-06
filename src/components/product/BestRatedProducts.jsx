import { useProductsContext } from "../../contexts/ProductsContext";
import BestRatedProduct from "./BestRatedProduct";

const BestRatedProducts = () => {
  const { products } = useProductsContext();

  //filter best rated products
  let filteredProducts;
  if (products) {
    filteredProducts = products.filter((product) => product.rating > 4.8);
  }

  return (
    <div className="best-rated-products">
      {filteredProducts
        ? filteredProducts.map((product) => (
            <BestRatedProduct key={product.id} product={product} />
          ))
        : "loading..."}
    </div>
  );
};

export default BestRatedProducts;
