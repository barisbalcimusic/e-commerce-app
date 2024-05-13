import { Link } from "react-router-dom";
import "../../App.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Terms of Use</Link>
        </li>
      </ul>
      <div className="contact">
        <p>123 Main Street, Anytown, USA</p>
        <p>
          <span>Phone:</span> 123-456-7890
        </p>
        <p>
          <span>Email:</span> info@buytheway.com
        </p>
      </div>
      <p>
        <em>© 2024 BuyTheWay Online Store. All rights reserved.</em>
      </p>
    </footer>
  );
};

export default Footer;
