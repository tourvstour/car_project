import React, { Component } from "react";
import { Card, Icon, Tree, Row, Col, Input, Menu, Dropdown } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class CarType extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      spec: [],
      carType: null,
      carSpec: null
    };
  }
  componentDidMount() {
    fetch("http://192.168.101.240:9091/api/show_menu.php")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cars: res
        });
      });
  }

  onMouseEnter = e => {
    fetch("http://192.168.101.240:9091/api/show_spec.php", {
      method: "POST",
      body: JSON.stringify({
        id: e
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res === null) {
          this.setState({
            spec: []
          });
        } else {
          this.setState({
            spec: res,
            carType: e
          });
        }
      });
  };
  onClick = e => {
    console.log(e.key);
    this.setState({
      carSpec: e.key
    });
  };
  render() {
    return (
      <div>
        <Row gutter={16} justify={"space-around"}>
          {this.state.cars.map(a => (
            <Col lg={{ span: 6 }}>
              <Card style={{ width: 300, borderRadius: "10px" }}>
                <img src={a.img} width="250" height="auto" />
                <Menu
                  item="1"
                  mode="horizontal"
                  onMouseEnter={() => this.onMouseEnter(a.Key)}
                  onClick={this.onClick}
                >
                  <SubMenu title={a.carType} style={{fontSize:"20px"}}>
                    <MenuItemGroup title={a.carType}>
                      {this.state.spec.map(b => (
                        <Menu.Item key={b.car_type_spec_id}>
                          {b.spec_name_th}
                        </Menu.Item>
                      ))}
                    </MenuItemGroup>
                  </SubMenu>
                </Menu>
              </Card>
            </Col>
          ))}
        </Row>
        {console.log(this.state.carType, this.state.carSpec)}
      </div>
    );
  }
}

export default CarType;
