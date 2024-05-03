import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products ? (
        products.map((product) => <ProductCard product={product} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Products;
