import React, { Component } from "react";
import Car from "./car.json";
import { Card, Row, Col } from "antd"
import { from } from "rxjs";

class CarSale extends Component {
    constructor() {
        super();
        this.state = {
            profile: Car
        }
    }
    render() {
        return (<div>
            {this.state.profile.map(a => (
                <div>
                    <Col lg={{ span: 12, offset: 2 }}>
                        <Card style={{ borderRadius: "10px" }}>
                            <Row gutter={8}>
                                <Col lg={{ span:8 }}>
                                    <Card style={{height:300,width:"auto"}}><img src="https://www.tqm.co.th/gallery/2410.jpg" style={{ height: "auto", width: "100%" }} /></Card>
                                </Col>
                                <Col style={{ fontSize: "25px" }} lg={{ span: 12,offset:1}}>
                                    <h1 style={{ color: "red" }}>{a.year} {a.brand} {a.serie} {a.serieDescription} {a.serieType}</h1>
                                    <div style={{ fontSize: "25px" }}>
                                        <h1>{`ราคา ${a.price} บาท`}</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <br />
                    </Col>
                    <br />
                </div>
            ))}
            {console.log(this.state.profile)}
        </div>)
    }
}

export default CarSale;