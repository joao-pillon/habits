import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Cadastro} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
