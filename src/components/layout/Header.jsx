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
import { useRef, useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const sidebarRef = useRef(null);

  const handleSidebarClick = () => {
    sidebarRef.current.style.transform = `translateX(${
      sidebarOpened ? "-100vw" : "100vw"
    })`;
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <header>
      <nav>
        <div className="nav-top">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-center">
          <div className="nav-left">
            <FontAwesomeIcon
              onClick={handleSidebarClick}
              className="menu-icon"
              icon={faBars}
            />
          </div>
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
            <Link to="/user">
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </nav>
      <Sidebar reference={sidebarRef} handleSidebarClick={handleSidebarClick} />
    </header>
  );
};

export default Header;
