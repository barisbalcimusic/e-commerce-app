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
import { useSearchContext } from "../../contexts/SearchContext";

const Header = () => {
  const { handleSidebarClick, sidebarRef, headerRef } = useSidebarContext();
  const { isLoggedIn } = useAuthContext();
  const { cart } = useCartContext();
  const { isMobile } = useResponsivityContext();
  const { categories } = useProductsContext();
  const { searchTerm, setSearchTerm, searchResults } = useSearchContext();
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <header ref={headerRef}>
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
                value={searchTerm}
                ref={searchRef}
                className="search-input"
                type="text"
                placeholder="search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            {searchTerm.length > 0 && (
              <div className="search-result-div">
                <ul>
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <li key={result.id} onClick={() => setSearchTerm("")}>
                        <Link to={`/store/product-detail/${result.id}`}>
                          {result.title.slice(0, 17) + " ..."}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <b>No matching</b>
                    </li>
                  )}
                </ul>
              </div>
            )}
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
              {categories &&
                categories.map((category, index) => (
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
