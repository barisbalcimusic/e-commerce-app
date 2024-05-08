import "../../App.scss";
import { useEffect, useState } from "react";
import fetchUserData from "../data/fetchUserData";

const RegistrationForm = ({ setRegistrationSuccess }) => {
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //0- check the password on every change
  useEffect(() => {
    if (newPassword) {
      const checkPassword = () => {
        newPassword.length < 8
          ? setPasswordWarning(true)
          : setPasswordWarning(false);
      };
      checkPassword();
    }
  }, [newPassword]);

  //2- change submit state
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  //3- fetch user data
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

  //4- check if the email already exists
  useEffect(() => {
    if (userData) {
      const match = userData.filter((user) => email === user.email);
      if (match.length === 0) {
        registerUser();
      } else {
        setEmailWarning(true);
      }
    }
  }, [userData]);

  //5- register user
  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: newPassword }),
      });
      setRegistrationSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //1- submit form
    <form onSubmit={handleSubmit} className="registration-form">
      <input className="form-input" type="text" placeholder="First name" />
      <input className="form-input" type="text" placeholder="Last name" />
      <input
        value={email}
        className="form-input"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={newPassword}
        type="text"
        className="form-input"
        placeholder="Password"
        required
        onChange={(e) => setNewPassword(e.target.value)}
      />
      {passwordWarning ? (
        <p className="warning">Password must contain at least 8 characters</p>
      ) : null}
      {emailWarning ? (
        <p className="warning">This email is already registered.</p>
      ) : null}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
