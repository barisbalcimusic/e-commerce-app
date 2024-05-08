import { useEffect, useState } from "react";
import "../../App.scss";
import fetchUserData from "../data/fetchUserData";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [userData, setUserData] = useState();

  //0- get the user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //2- check if the user already exists
  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = userData.filter(
      (user) => user.email === email && user.password === password
    );
    if (!userExists) {
      setSuccess(true);
      setLoggedIn(true);
      handleNavigation();
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (success) navigate("/");
  }, [success]);

  return (
    //1- submit form
    <form onSubmit={handleLogin} className="login-form">
      <input
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
      {success ? (
        <p className="warning">your email or password is wrong</p>
      ) : null}
    </form>
  );
};

export default LoginForm;
