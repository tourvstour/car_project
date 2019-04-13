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
    fetch("http://183.88.219.85:7073/api/show_menu.php")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cars: res
        });
      });
  }
  onClick = e => {
    console.log(e);
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
              <Card style={{ width: "auto", borderRadius: "10px" }}>
                <img src={a.img} style={{ display: "block", width: "250px", height: "150px" }} />
                <Menu
                  item="1"
                  mode="horizontal"
                  onClick={this.onClick}
                >
                  <SubMenu title={a.t_name} style={{ fontSize: "20px" }}>
                    <MenuItemGroup title={a.t_name}>
                      {a.sub.map(b => (
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
        {console.log(this.state.cars)}
      </div>
    );
  }
}

export default CarType;
