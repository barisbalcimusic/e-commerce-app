import "../../App.scss";
import { Link, NavLink } from "react-router-dom";
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
import { useEffect, useRef } from "react";

const Header = () => {
  const { handleSidebarClick, sidebarRef } = useSidebarContext();
  const { isLoggedIn } = useAuthContext();
  const { cart } = useCartContext();
  const { isMobile } = useResponsivityContext();
  const { categories } = useProductsContext();
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <header>
      <nav>
        <div className="nav-top">
          <Link className="logo-link" to="/">
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
                ref={searchRef}
                className="search-input"
                type="text"
                placeholder="search"
              />
            </form>
          </div>
          <div className="nav-right">
            <Link aria-label="credentials" to={isLoggedIn ? "/user" : "/auth"}>
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </Link>
            <Link aria-label="cart" to="/cart">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              <p className="count">{cart.length}</p>
            </Link>
          </div>
        </div>
        {!isMobile ? (
          <div className="nav-bottom">
            <ul className="categories-bar">
              <li>
                <Link to="/store">ALL PRODUCTS</Link>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <NavLink to={`/store/${category}`}>{category}</NavLink>
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
