import { useEffect, useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";

const Credentials = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selection, setSelection] = useState(null);

  const handleFocus = (e) => {
    setSelection(e.target.id);
    e.target.checked = true;
  };

  return (
    <div className="credentials">
      <h2>Welcome</h2>
      <div className="selecting-div">
        <div className="sign-up-div">
          <div className="radio-div">
            <input
              type="radio"
              id="sign-up"
              name="authorisation"
              onFocus={handleFocus}
            />
            <label htmlFor="sign-up">Sign-up</label>
          </div>
          {selection === "sign-up" ? <RegistrationForm /> : null}
        </div>
        <div className="log-in-div">
          <div className="radio-div">
            <input
              type="radio"
              id="log-in"
              name="authorisation"
              onFocus={handleFocus}
              defaultChecked
            />
            <label htmlFor="log-in">Log-in</label>
          </div>
          {!selection || selection === "log-in" ? <LoginForm /> : null}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
