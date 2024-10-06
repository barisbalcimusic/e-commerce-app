import { Link } from "react-router-dom";
import { useResponsivityContext } from "../contexts/ResponsivityContext";

const Category = ({ category, products }) => {
  const { isMobile } = useResponsivityContext();

  const productsFromCategory = products
    .filter((curr) => curr.product_category === category)
    .slice(0, 3);

  return (
    <Link className="category-box" to={`/store/${category}`}>
      <div className="category-name">{category}</div>
      {!isMobile &&
        productsFromCategory.map((product) => (
          <div key={product.product_id} className="category-img-div">
            <img
              className="category-image"
              src={product.product_thumbnail}
              alt="category-image"
            />
          </div>
        ))}
    </Link>
  );
};

export default Category;
