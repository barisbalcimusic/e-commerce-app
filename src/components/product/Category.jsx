import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="category-box">
      <Link to={`/store/${category}`}>{category}</Link>
    </div>
  );
};

export default Category;
