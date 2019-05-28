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
      <div className="bodys">
        <Row  >
          <div style={{ fontFamily: "'Kanit', sans-serif" }}>
            <Nav />
          </div>
          <Col lg={{ span: 20, offset: 2 }}>
            <div >
              <Promote />
              <br />
              <CarType />
            </div>
          </Col>
          <br />
          <Footers />
        </Row>
      </div>
    );
  }
}

export default Main;
