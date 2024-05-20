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
          <Link
            to="/"
            className="menu-item"
            onClick={() => handleSidebarClick()}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="menu-item"
            onClick={() => handleSidebarClick()}
          >
            Discounted
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="menu-item"
            onClick={() => handleSidebarClick()}
          >
            Bestseller
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="menu-item"
            onClick={() => handleSidebarClick()}
          >
            Best Rated
          </Link>
        </li>
        <li className="menu-item">Categories</li>
        {categories ? (
          categories.map((category, index) => (
            <li key={index}>
              <Link
                onClick={() => handleSidebarClick()}
                className="sub-menu-item"
                to={`/store/${category}`}
              >
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
