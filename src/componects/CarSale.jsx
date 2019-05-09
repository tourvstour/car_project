import React, { Component } from "react";
//import Car from "./car.json";
import { Card, Row, Col, Tag } from "antd";


class CarSale extends Component {
  constructor() {
    super();
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    let url = window.location.search.split("&"),
      type = url[1].toString().split("type=")[1],
      spec = url[2].toString().split("spec=")[1]

    console.log(type, spec)

    fetch("http://183.88.219.85:9091/api/show_cars.php", {
      method: "POST",
      body: JSON.stringify({
        carType: type,
        carSpec: spec
      })
    }).then(res => res.json())
      .then(res => {
        this.setState({
          profile: res
        })
      })
  }

  Car = (e) => {
    console.log(e)

    window.open("/car_pro?id=" + e)
  }
  render() {
    return (
      <div>
        {this.state.profile.map(a => (
          <div>
            <Col lg={{ span: 14, offset: 2 }}>
              <Card style={{ borderRadius: "10px" }} >
                <Row gutter={8}>
                  <Col lg={{ span: 8 }}>
                    <img
                      src={`./api/img/${a.img}`}
                      style={{ height: "auto", width: "100%" }}
                    />
                  </Col>
                  <Col style={{ fontSize: "15px" }} lg={{ offset: 1 }}>
                    <h3 style={{ color: "red" }}>
                      {a.product_brand_description} {a.product_serie_description} {a.product_serie_description_description}{" "}
                      {a.spec_name}
                    </h3>
                    <div style={{ fontSize: "20px", textAlign: "justify" }}>
                      <h5>ที่นั่งโดยสาร {a.seat} </h5>
                      <h5>ปี {a.year_product}</h5>
                      <h5>{`ราคา ${a.price} บาท`}</h5>
                    </div>
                    <div style={{ fontSize: "20px", textAlign: "justify" }}>
                      <Tag color={"green"} onClick={() => this.Car(a.car_product_id)} key={a.car_product_id}>รายละเอียด</Tag>
                    </div>
                  </Col>
                </Row>
              </Card>
              <br />
            </Col>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default CarSale;
