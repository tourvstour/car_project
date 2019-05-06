import React, { Component } from "react";
import { Card, Col, Icon, Row, Layout, Menu, Breadcrumb } from "antd";
import CarSale from "./componects/CarSale";
import Footers from "./componects/Footer";
import Nav from "./componects/Nav"

const { Header, Content, Footer } = Layout;
class carSale extends Component {
    render() {
        return (
            <div>
                <div style={{ fontFamily: "'Kanit', sans-serif" }}>
                    <Nav />
                </div>
                <div>
                    <Card>
                        <CarSale />
                    </Card>
                </div>
                <div>
                    <Footers />
                </div>
            </div >
        );
    }
}

export default carSale;
