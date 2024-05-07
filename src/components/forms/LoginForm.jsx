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

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userData.filter(
        (user) => user.email === email && user.password === password
      )
    ) {
      setSuccess(true);
      setLoggedIn(true);
      handleNavigation();
    } else {
      setSuccess(false);
    }
  };

  const handleNavigation = () => {
    success ? navigate("/") : null;
  };

  return (
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
        type="text"
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <p className="warning">
        {!success ? "your email or password is wrong" : null}
      </p>
    </form>
  );
};

export default LoginForm;
