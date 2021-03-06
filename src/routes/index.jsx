import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Group from "../pages/Group";
import Group_Id from "../pages/Group_Id";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Cadastro} />
      <Route exact path="/group" component={Group} />
      <Route exact path="/group/:id" component={Group_Id} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
