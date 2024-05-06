import { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";

const Credentials = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? <RegistrationForm /> : <LoginForm />;
};

export default Credentials;
