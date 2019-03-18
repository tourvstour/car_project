import React, { Component } from "react";
import { Card, Col, Icon, Row, Layout, Menu, Breadcrumb } from "antd";
import CarType from "./componects/CarType";
import Promote from "./componects/Promote";
import Footers from "./componects/Footer";
import Nav from "./componects/Nav";

const { Header, Content, Footer } = Layout;
class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ fontFamily: "'Kanit', sans-serif" }}>
          <Header style={{ backgroundColor: "#FDEBD0" }}>
            <Nav />
          </Header>
        </div>
        <div>
          <Card>
            <Promote />
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
