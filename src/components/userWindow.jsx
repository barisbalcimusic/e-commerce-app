const userWindow = () => {
  return (
    <div className="user-window">
      <ul>
        <li>
          <NavLink to="/login">Giris yap</NavLink>
        </li>
        <li>
          <NavLink to="/register">Kayit ol</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default userWindow;
