import "../App.scss";
import { useEffect, useState } from "react";
import registerUser from "../utils/services/registerUser";

const RegistrationForm = ({ setRegistrationSuccess }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // check the password on every change
    if (password) {
      const checkPassword = () => {
        password.length < 8
          ? setPasswordWarning(true)
          : setPasswordWarning(false);
      };
      checkPassword();
    }
  }, [password]);

  useEffect(() => {
    // register if submitted
    if (isSubmitted)
      registerUser(email, password)
        .then((data) => {
          if (data) setRegistrationSuccess(true);
        })
        .catch((err) => console.error(err));
  }, [isSubmitted]);

  // change submit state
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <input
        className="form-input"
        type="text"
        placeholder="First name"
        required
      />
      <input
        className="form-input"
        type="text"
        placeholder="Last name"
        required
      />
      <input
        value={email}
        className="form-input"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="text"
        className="form-input"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordWarning ? (
        <p className="warning">
          The password must contain at least 8 characters.
        </p>
      ) : null}
      <button className="button-style" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
