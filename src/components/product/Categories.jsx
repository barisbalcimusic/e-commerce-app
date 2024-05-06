import { useProductsContext } from "../../contexts/ProductsContext";
import Category from "./Category";

const Categories = () => {
  const { categories } = useProductsContext();

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Categories;
