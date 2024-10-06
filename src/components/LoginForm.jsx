import "../App.scss";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import login from "../utils/services/login";

const LoginForm = ({ setLoginSuccess }) => {
  // user input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginWarning, setLoginWarning] = useState(false);
  const { setIsLoggedIn } = useAuthContext();

  const { setUserData } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      login(email, password)
        .then((data) => {
          setUserData(data);
          setLoginSuccess(true);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error(error);
          setLoginWarning(error);
        });
    }
    setIsSubmitted(false);
  }, [isSubmitted]);

  return (
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
      {loginWarning && <p className="warning">{loginWarning.message}</p>}
    </form>
  );
};

export default LoginForm;
