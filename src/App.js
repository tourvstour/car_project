import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import carSale from "./carSale";
import Administrator from "./Administrator";

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/sale" component={carSale} />
    <Route path="/admin" component={Administrator} />>
  </Switch>
);
export default App;
