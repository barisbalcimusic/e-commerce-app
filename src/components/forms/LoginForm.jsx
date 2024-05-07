import { useEffect, useState } from "react";
import "../../App.scss";
import fetchUserData from "../data/fetchUserData";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="E-mail"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="text"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
