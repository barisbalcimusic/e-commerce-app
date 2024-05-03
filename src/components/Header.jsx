import "../App.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-search">
          <input
            className="search-input"
            type="text"
            placeholder="aradiginiz ürünü yazin..."
          />
          <button>Ara</button>
        </div>
        <div className="nav-user">
          <Link to="/user">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
