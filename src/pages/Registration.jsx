import "../App.scss";
import { useState } from "react";

const Registration = () => {
  const [newPassword, setNewPassword] = useState(null);
  const [warning, setWarning] = useState(false);

  const checkPassword = () => {
    if (newPassword.length < 8) {
      setWarning(true);
    }
  };

  return (
    <form className="registration-form">
      <input type="text" placeholder="Ad" />
      <input type="text" placeholder="Soyad" />
      <input type="text" placeholder="E-posta" />
      <p className="pass-warning">{warning}</p>
      <input
        value={newPassword ? newPassword : ""}
        onChange={(e) => setNewPassword(e.target.value)}
        type="text"
        placeholder="Sifre"
      />
      <input type="text" placeholder="E-posta" />
      <button type="submit">Kayit ol</button>
    </form>
  );
};

export default Registration;
