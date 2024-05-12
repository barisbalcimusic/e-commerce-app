import "../../App.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";
import { useResponsivityContext } from "../../contexts/ResponsivityContext";
import { useProductsContext } from "../../contexts/ProductsContext";

const Header = () => {
  const { handleSidebarClick, sidebarRef } = useSidebarContext();
  const { isLoggedIn } = useAuthContext();
  const { cart } = useCartContext();
  const { isMobile } = useResponsivityContext();
  const { categories } = useProductsContext();

  return (
    <header>
      <nav>
        <div className="nav-top">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-center">
          {isMobile ? (
            <div className="nav-left">
              <FontAwesomeIcon
                onClick={handleSidebarClick}
                className="menu-icon"
                icon={faBars}
              />
            </div>
          ) : null}
          <div className="nav-middle">
            <form className="search-form">
              <FontAwesomeIcon className="glas-icon" icon={faMagnifyingGlass} />
              <input
                className="search-input"
                type="text"
                placeholder="search"
              />
            </form>
          </div>
          <div className="nav-right">
            <Link to={isLoggedIn ? "/user" : "/auth"}>
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              <p className="count">{cart.length}</p>
            </Link>
          </div>
        </div>
        {!isMobile ? (
          <div className="nav-bottom">
            <ul className="categories-bar">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/store/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
      {isMobile ? (
        <Sidebar
          sidebarRef={sidebarRef}
          handleSidebarClick={handleSidebarClick}
        />
      ) : null}
    </header>
  );
};

export default Header;
