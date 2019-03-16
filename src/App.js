import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import Main from "./main"
const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
export default App;
