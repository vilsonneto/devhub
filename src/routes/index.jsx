import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setIdUser={setIdUser}
        />
      </Route>
      <Route path="/perfil">
        <Perfil
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setIdUser={setIdUser}
          idUser={idUser}
        />
      </Route>
    </Switch>
  );
};
