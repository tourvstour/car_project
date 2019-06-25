import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import carSale from "./carSale";
import SetImage from "./admins/SetImage"
import Administrator from "./Administrator";
import CarProfile from "./componects/CarProfile";
import FormWaiting from "./admins/FormWaiting"
import CustommerWaiting from "./admins/CustommerWaiting"

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/sale" component={carSale} />
    <Route path="/admin" component={Administrator} />
    <Route path="/set_img" component={SetImage} />
    <Route path="/car_pro" component={CarProfile} />
    <Route path="/formwaiting" component={FormWaiting} />
    <Route path="/custommerwaiting" component={CustommerWaiting} />
  </Switch>
);
export default App;
