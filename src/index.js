import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/bodys.css"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter } from "react-router-dom";

const Apps = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(<Apps />, document.getElementById("root"));

