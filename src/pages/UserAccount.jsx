import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import logout from "../utils/services/logout";

const UserAccount = () => {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useAuthContext();
  const navigate = useNavigate();

  //if not logged in, redirect to login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout()
      .then((data) => {
        console.log(data);
        setIsLoggedIn(false);
        setUserData(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="user-account-container">
      {userData && <h2>Welcome {userData.data.email}!</h2>}
      <button onClick={handleLogout} className="button-style ">
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
