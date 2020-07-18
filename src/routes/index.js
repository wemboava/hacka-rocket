import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
  </Switch>
);

export default Routes;
