import "../App.scss";

const Login = () => {
  return (
    <form className="login-form">
      <input type="text" placeholder="E-posta" />
      <input type="text" placeholder="Sifre" />
      <button type="submit">Giris yap</button>
    </form>
  );
};

export default Login;
