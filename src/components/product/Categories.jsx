import { useProductsContext } from "../../contexts/ProductsContext";
import Category from "./Category";

const Categories = () => {
  const { categories, products } = useProductsContext();

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Category key={index} category={category} products={products} />
      ))}
    </div>
  );
};

export default Categories;
