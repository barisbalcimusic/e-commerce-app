import "../../App.scss";
import { useEffect, useRef, useState } from "react";

const RegistrationForm = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [warning, setWarning] = useState();

  useEffect(() => {
    if (newPassword) {
      const checkPassword = () => {
        newPassword.length < 8
          ? setWarning("Password must contain at least 8 Characters")
          : setWarning(null);
      };
      checkPassword();
    }
  }, [newPassword]);

  return (
    <form className="registration-form">
      <input className="form-input" type="text" placeholder="First name" />
      <input className="form-input" type="text" placeholder="Last name" />
      <input className="form-input" type="text" placeholder="Email" />
      <input
        value={newPassword ? newPassword : ""}
        type="text"
        className="form-input"
        placeholder="Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">Register</button>
      <p className="warning">{warning}</p>
    </form>
  );
};

export default RegistrationForm;
