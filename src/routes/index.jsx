import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
