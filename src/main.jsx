import React, { Component } from "react";
import { Card, Col, Icon, Row, Layout, Menu, Breadcrumb } from "antd";
import CarType from "./componects/CarType";
import Promote from "./componects/Promote";
import Footers from "./componects/Footer";
import Nav from "./componects/Nav"

const { Header, Content, Footer } = Layout;
class Main extends Component {
  render() {
    return (
      <Layout style={{ fontFamily: "'Kanit', sans-serif" }}>
        <Header style={{ backgroundColor: "#FDEBD0" }} >
          <Nav />
        </Header>
        <Content>
          <Card>
            <Promote />
            <CarType />
          </Card>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#FDEBD0",
            width: "100%",
            fontSize: "15px",
            position: "fixed",
            bottom: 0
          }}
        >
          <Footers />
        </Footer>
      </Layout>
    );
  }
}

export default Main;
