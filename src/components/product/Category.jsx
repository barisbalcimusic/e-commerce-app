import { Link } from "react-router-dom";

const Category = ({ category, products }) => {
  const productsFromCategory = products
    .filter((curr) => curr.category === category)
    .slice(0, 3);

  return (
    <Link className="category-box" to={`/store/${category}`}>
      <div className="category-name">{category}</div>
      {productsFromCategory.map((product) => (
        <div className="category-img-div">
          <img className="category-image" src={product.thumbnail} />
        </div>
      ))}
    </Link>
  );
};

export default Category;
