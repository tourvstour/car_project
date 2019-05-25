import React, { Component } from "react";
import { Card, Icon, Tree, Row, Col, Input, Menu, Dropdown } from "antd";
import "../css/bodys.css"
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
    fetch("http://183.88.219.85:9091/api/show_menu.php")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cars: res
        });
      });
  }
  
  onClick = e => {
    console.log(e.keyPath);
    let type = e.keyPath[1],
      spec = e.keyPath[0]
    window.location.href = "/sale?&type=" + type + "&spec=" + spec
  }

  render() {
    return (
      <div>
        <Col lg={{ span: 20, offset: 2 }}>
          <Row gutter="16" justify="space-around" >
            {this.state.cars.map(a => (
              <Col lg={{ span: 6 }}>
                <Card hoverable style={{ width: "auto", borderRadius: "10px" }}>
                  <img src={a.img} style={{ display: "block", width: "250px", height: "150px" }} />
                  <Menu
                    item="1"
                    mode="horizontal"
                    onClick={this.onClick}
                  >
                    <SubMenu title={a.t_name} style={{ fontSize: "20px" }} key={a.car_type_id}>
                      <MenuItemGroup title={a.t_name} >
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
        </Col>
      </div>
    );
  }
}

export default CarType;
