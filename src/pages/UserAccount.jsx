import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const UserAccount = () => {
  const { isLoggedIn, setIsLoggedIn, loggedUser } = useAuthContext();
  const navigate = useNavigate();

  //if not logged in, redirect to login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="user-account-container">
      <h2>Welcome {loggedUser && loggedUser.firstname}!</h2>
      <button onClick={handleClick} className="button-style ">
        Sign out
      </button>
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
