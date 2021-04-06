import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DisplayOrders from "./components/DisplayOrders";
import OrderDetails from "./components/OrderDetails";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DisplayOrders}></Route>
      <Route exact path="/OrderDetails" component={OrderDetails}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
