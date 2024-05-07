import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Link className="category-box" to={`/store/${category}`}>
      {category}
    </Link>
  );
};

export default Category;
