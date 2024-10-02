import { useParams } from "react-router-dom";
import Products from "../components/Products";
import { useProductsContext } from "../contexts/ProductsContext";

const Store = () => {
  const url = useParams();
  const { products } = useProductsContext();

  return products ? (
    Object.keys(url).length === 0 ? (
      <Products products={products} />
    ) : (
      <Products
        products={products.filter(
          (product) => product.category === url.category
        )}
      />
    )
  ) : null;
};

export default Store;
