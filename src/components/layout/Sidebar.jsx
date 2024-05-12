import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarRef, handleSidebarClick }) => {
  const { categories } = useProductsContext();

  return (
    <aside ref={sidebarRef}>
      <FontAwesomeIcon
        onClick={() => handleSidebarClick()}
        className="close-icon"
        icon={faX}
      />
      <ul>
        <li>
          <Link to="/store" className="category all-products">
            All products
          </Link>
        </li>
        {categories ? (
          categories.map((category, index) => (
            <li key={index}>
              <Link
                onClick={() => handleSidebarClick()}
                className="category"
                to={`/store/${category}`}>
                {category}
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
