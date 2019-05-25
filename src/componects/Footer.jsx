import React, { Component } from 'react'
import { Card, Col, Icon } from 'antd'
class Footer extends Component {
    render() {
        return (
                <Col lg={{ span: 24 }}>
                <br/>
                    <Card>
                        <h3>line:@toyotacontact</h3>
                        <h3>email:contactcenter@toyota.co.th</h3>
                        <div className="icons-list">
                            <Icon style={{ fontSize: "80px" }} type="facebook" />
                            <Icon style={{ fontSize: "80px" }} type="google" />
                            <Icon style={{ fontSize: "80px" }} type="twitter" />
                        </div>
                    </Card>
                </Col>
        )
    }
}
export default Footer;