import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import carSale from "./carSale";
import SetImage from "./admins/SetImage"
import Administrator from "./Administrator";

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/sale" component={carSale} />
    <Route path="/admin" component={Administrator} />
    <Route path="/set_img" component={SetImage} />
  </Switch>
);
export default App;
