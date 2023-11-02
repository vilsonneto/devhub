import { Link, useHistory } from "react-router-dom";
import { HeaderContainer } from "./style";

export const Header = ({ noMenu, logged, setAuthenticated, setUser }) => {

  const Logout = () => {
    localStorage.removeItem("@Kenziehub:token");
    localStorage.removeItem("@Kenziehub:id");
    setUser({});
    setAuthenticated(false);
  };

  return (
    <HeaderContainer noMenu={noMenu}>
      <div>
        <Link to="/">
          <h1 className="logo" >
            <span className="logo-kenzie">Dev</span>
            <span className="logo-hub">hub</span>
          </h1>
        </Link>
      </div>

      {logged ? (
        <div className="exit">
          <span onClick={Logout}>Logout</span>
        </div>
      ) : (
        <div className="menu">
          <Link className="login" to="/login">
            sign in
          </Link>
          <span>|</span>
          <Link className="register" to="/register">
            sign up
          </Link>
        </div>
      )}
    </HeaderContainer>
  );
};
