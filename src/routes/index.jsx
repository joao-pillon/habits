import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthentication] = useState(false);

  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
