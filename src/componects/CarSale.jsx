import React, { Component } from "react";
import Car from "./car.json";
import { Card, Row, Col } from "antd";
import { from } from "rxjs";

class CarSale extends Component {
  constructor() {
    super();
    this.state = {
      profile: Car
    };
  }
  render() {
    return (
      <div>
        {this.state.profile.map(a => (
          <div>
            <Col lg={{ span: 14, offset: 2 }}>
              <Card style={{ borderRadius: "10px" }}>
                <Row gutter={8}>
                  <Col lg={{ span: 8 }}>
                    <img
                      src="https://www.tqm.co.th/gallery/2410.jpg"
                      style={{ height: "auto", width: "100%" }}
                    />
                  </Col>
                  <Col style={{ fontSize: "15px" }} lg={{ offset: 1 }}>
                    <h3 style={{ color: "red" }}>
                      {a.year} {a.brand} {a.serie} {a.serieDescription}{" "}
                      {a.serieType}
                    </h3>
                    <div style={{ fontSize: "20px" }}>
                      <h3>{`ราคา ${a.price} บาท`}</h3>
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
      </div>
    );
  }
}

export default CarSale;
