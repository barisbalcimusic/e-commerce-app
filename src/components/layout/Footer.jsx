import styled from "styled-components";
import "../../App.scss";

const FOOTER = styled.footer`
  width: 100%;
  height: 30%;
  min-height: 200px;
  background-color: orange;
  font-weight: bold;
  ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    li {
      font-weight: bold;
    }
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <ul>
        <li>Help Centre</li>
        <li>Contact Us</li>
        <li>Shipping Costs and Delivery Times</li>
        <li>Jobs & Careers</li>
        <li>Terms & Conditions / Imprint</li>
        <li>Privacy Policy</li>
        <li>Cookie Settings</li>
        <li>About Us</li>
        <li>Jobs & Careers</li>
        <li>Terms & Conditions / Imprint</li>
      </ul>
    </FOOTER>
  );
};

export default Footer;
