import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import Truck from "./componects/Truck";
const App = () => (
  <Switch>
    <Route exact path="/" component={Truck} />
  </Switch>
);
export default App;
