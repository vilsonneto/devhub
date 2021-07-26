import { Link, useHistory } from "react-router-dom";
import { HeaderContainer } from "./style";

export const Header = ({ noMenu }) => {
  const history = useHistory();
  const sendHome = () => {
    history.push("/");
  };

  return (
    <HeaderContainer noMenu={noMenu}>
      <div>
        <h1 className="logo" onClick={sendHome}>
          <span className="logo-kenzie">Kenzie</span>
          <span className="logo-hub">hub</span>
        </h1>
      </div>
      <div className="menu">
        <Link className="login" to="/login">
          sign in
        </Link>
        <span>|</span>
        <Link className="register" to="/register">
          sign up
        </Link>
      </div>
    </HeaderContainer>
  );
};
