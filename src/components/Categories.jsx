import { useProductsContext } from "../contexts/ProductsContext";
import Category from "./Category";

const Categories = () => {
  const { categories, products } = useProductsContext();

  return (
    <div className="categories">
      {categories &&
        categories.map((category) => (
          <Category key={category} category={category} products={products} />
        ))}
    </div>
  );
};

export default Categories;
