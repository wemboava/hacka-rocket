import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import ProductDetail from "../pages/productDetail";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/detail" component={ProductDetail} exact />
  </Switch>
);

export default Routes;
