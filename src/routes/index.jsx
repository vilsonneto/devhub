import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </Switch>
  );
};
