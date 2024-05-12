import { useResponsivityContext } from "../../contexts/ResponsivityContext";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const { isMobile } = useResponsivityContext();

  return (
    <div className="products">
      {products ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Products;
