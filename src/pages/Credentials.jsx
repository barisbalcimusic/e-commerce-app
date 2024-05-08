import { useEffect, useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";
import { useNavigate } from "react-router-dom";

const Credentials = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selection, setSelection] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  const handleFocus = (e) => {
    setSelection(e.target.id);
    e.target.checked = true;
  };

  //if success, show message and start countdown
  let countdown;
  useEffect(() => {
    if (registrationSuccess) {
      countdown = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
  }, [registrationSuccess]);

  //when countdown ends, redirect to home
  useEffect(() => {
    if (count <= 0) {
      clearInterval(countdown);
      navigate("/");
    }
  }, [count]);

  return (
    <div className="credentials">
      {!registrationSuccess ? (
        <>
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
              {selection === "sign-up" ? (
                <RegistrationForm
                  setRegistrationSuccess={setRegistrationSuccess}
                />
              ) : null}
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
        </>
      ) : (
        <p>
          Succesfull registered! You will be redirected in <b>{count}</b>{" "}
          seconds.
        </p>
      )}
    </div>
  );
};

export default Credentials;
