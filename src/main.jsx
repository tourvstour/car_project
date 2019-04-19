import React, { Component } from "react";
import { Card, Col, Icon, Row, Layout, Menu, Breadcrumb } from "antd";
import CarType from "./componects/CarType";
import Promote from "./componects/Promote";
import Footers from "./componects/Footer";
import Nav from "./componects/Nav";
import Logo from "./componects/Logo"


class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ fontFamily: "'Kanit', sans-serif" }}>
            <Nav />
        </div>
        <div>
          <Logo />
          <Card style={{borderColor:"#ffffff"}}>
            <CarType />
          </Card>
        </div>
        <div>
          <Footers />
        </div>
      </div>
    );
  }
}

export default Main;
