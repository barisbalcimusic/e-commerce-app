import "../App.scss";
import { useEffect, useState } from "react";
import fetchUserData from "../utils/services/fetchUserData";
import { useAuthContext } from "../contexts/AuthContext";

const LoginForm = ({ setLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginWarning, setLoginWarning] = useState(false);
  const { setIsLoggedIn, setLoggedUser } = useAuthContext();

  //1- change submit state
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  //2- fetch user data
  useEffect(() => {
    if (isSubmitted) {
      const fetchData = async () => {
        try {
          const data = await fetchUserData();
          setUserData(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [isSubmitted]);

  //3- check if the user already exists
  useEffect(() => {
    if (userData) {
      const userExists = userData.find(
        (user) => user.email == email && user.password == password
      );
      if (userExists) {
        setLoginWarning(false);
        setLoginSuccess(true);
        setIsLoggedIn(true);
        setLoggedUser(userExists);
      } else {
        setLoginWarning(true);
        setIsSubmitted(false);
      }
    }
  }, [userData]);

  return (
    //0- submit form
    <form onSubmit={handleSubmit} className="login-form">
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
      <button className="button-style" type="submit">
        Login
      </button>
      {loginWarning ? (
        <p className="warning">The username or password is incorrect.</p>
      ) : null}
    </form>
  );
};

export default LoginForm;
