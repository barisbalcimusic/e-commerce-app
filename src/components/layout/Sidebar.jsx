import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ASIDE = styled.aside`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  position: absolute;
  top: 145px;
  left: -100vw;
  transition: transform 0.3s 0s linear;
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: bold;
`;
const LI = styled.li`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;
const iconStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "35px",
};
const categoryStyle = {
  color: "black",
};

const Sidebar = ({ sidebarRef, handleSidebarClick }) => {
  const { categories } = useProductsContext();

  return (
    <ASIDE ref={sidebarRef}>
      <FontAwesomeIcon
        onClick={() => handleSidebarClick()}
        style={iconStyle}
        icon={faX}
      />
      <UL>
        <LI>
          <Link to="/store" className="category all-products">
            All products
          </Link>
        </LI>
        {categories ? (
          categories.map((category, index) => (
            <LI key={index}>
              <Link
                onClick={() => handleSidebarClick()}
                style={categoryStyle}
                to={`/store/${category}`}>
                {category}
              </Link>
            </LI>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </UL>
    </ASIDE>
  );
};

export default Sidebar;
