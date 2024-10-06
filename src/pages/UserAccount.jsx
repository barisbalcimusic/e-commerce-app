import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import logout from "../utils/services/logout";
import OrderList from "../components/OrderList";
import { useNavigate } from "react-router-dom";
import Adresses from "../components/Adresses";
import Security from "../components/Security";

const UserAccount = () => {
  const [renderedComponent, setRenderedComponent] = useState(null);
  const { setIsLoggedIn, userData, setUserData } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        setIsLoggedIn(false);
        setUserData(null);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const selectRenderedComponent = () => {
    switch (renderedComponent) {
      case "orders":
        return <OrderList />;
      case "security":
        return <Security />;
      case "adresses":
        return <Adresses />;
      default:
        return null;
    }
  };

  return renderedComponent ? (
    <div className="user-setting-container">{selectRenderedComponent()}</div>
  ) : (
    <div className="user-account-container">
      <h2>Welcome {userData.data.firstname || "Guest"}!</h2>
      <div className="user-settings">
        <div
          className="user-setting"
          onClick={() => setRenderedComponent("orders")}>
          My Orders
        </div>
        <div
          className="user-setting"
          onClick={() => setRenderedComponent("security")}>
          Login and Security
        </div>
        <div
          className="user-setting"
          onClick={() => setRenderedComponent("adresses")}>
          Adresses
        </div>

        <div className="user-setting" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
