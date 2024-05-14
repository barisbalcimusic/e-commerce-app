import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const UserAccount = () => {
  const { isLoggedIn, loggedUser } = useAuthContext();
  const navigate = useNavigate();

  //if not logged in, redirect to home
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <div className="user-account-container">
      <h2>Welcome {loggedUser && loggedUser.firstname}!</h2>
      <div className="user-settings">
        <div className="user-setting">My Orders</div>
        <div className="user-setting">Login and Security</div>
        <div className="user-setting">Adresses</div>
        <div className="user-setting">Payment Methods</div>
        <div className="user-setting">Contact us</div>
      </div>
    </div>
  );
};

export default UserAccount;
