import React, { Component } from 'react'
import Nav from './Nav'
import ImageGallery from 'react-image-gallery'
import { Row, Col, Card, Tag, Button, Modal, Input, message } from 'antd'


const images = [
    {
        original: './api/img/1.jpg',
        thumbnail: './api/img/1.jpg'
    },
    {
        original: './api/img/2.jpg',
        thumbnail: './api/img/2.jpg'
    },
    {
        original: './api/img/3.jpg',
        thumbnail: './api/img/3.jpg'
    },

]
class CarProfile extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            profile: [],
            visibles: false
        }
    }
    componentDidMount() {
        let id = window.location.search.split("?id=")[1],
            profiles = "profiles",
            img = "img"
        fetch("http://183.88.219.85:9091/api/profile.php", {
            method: "POST",
            body: JSON.stringify({
                type: profiles,
                id: id
            })
        }).then(res => res.json())
            .then(res => {
                this.setState({
                    profile: res
                })
            })
        fetch("http://183.88.219.85:9091/api/profile.php", {
            method: "POST",
            body: JSON.stringify({
                type: img,
                id: id
            })
        }).then(res => res.json())
            .then(res => {
                this.setState({
                    images: res
                })
            })
    }

    ConnectSale = () => {
        this.setState({
            visibles: true
        })
    }

    CustomerWaiting = () => {
        let id = this.state.profile.map(a => a.car_product_id).toString(),
            name = document.getElementById('name').value,
            email = document.getElementById('email').value,
            phone = document.getElementById('phone').value

        if (id === "" || name === "" || email === "" || phone === "") {
            message.error("กรอกข้อมูลให้ครบถ้วน")
        } else {
            fetch("http://183.88.219.85:9091/api/customer_waiting.php", {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    name: name,
                    email: email,
                    phone: phone
                })
            }).then(() => {
                message.success("บันทึกข้อมูลสำเร็จ รอ เจ้าหน้าที่ติดต่อกลับใน24ชั่วโมง")
                this.setState({
                    visibles: false
                })
            })
        }
    }

    render() {
        return (<div>
            <Nav />
            <br />
            <Col lg={{ span: 22, offset: 2 }}>
                <Row>
                    <Col lg={{ span: 14 }}>
                        <ImageGallery items={this.state.images} thumbnailPosition="left" showFullscreenButton="" showPlayButton="" />
                    </Col>
                    <Col lg={{ span: 7, offset: 1 }}>
                        <Card>
                            <div>รายละเอียดหลัก</div>
                            <table>
                                <tr>
                                    <td>รูป</td>
                                    <td>ตัวถัง:</td>
                                    <td>{this.state.profile.map(a => `${a.nick_name}  ${a.product_serie_description}  ${a.product_serie_description_description}`)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>ระบบเกียร์:</td>
                                    <td>{this.state.profile.map(a => a.product_gear_description)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>ขนาดเครื่องยนต์:</td>
                                    <td>{this.state.profile.map(a => a.engine)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>จำนวนที่นั่ง:</td>
                                    <td>{this.state.profile.map(a => a.seat)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>เชื้อเพลง:</td>
                                    <td>{this.state.profile.map(a => a.fuel_name_th)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>สี:</td>
                                    <td>{this.state.profile.map(a => a.color)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>Price:</td>
                                    <td>{this.state.profile.map(a => a.price)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>สถานะ:</td>
                                    <td><Tag>{this.state.profile.map(a => a.car_status_name)}</Tag></td>
                                </tr>
                            </table>
                            <br />
                            <div>
                                {this.state.profile.map(a => (<div>
                                    <Button value={a.car_product_id} block onClick={this.ConnectSale} disabled={this.state.profile.map(a => a.buttons).toString()}>ติดต่อผู้ขาย</Button>
                                </div>))}
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.visibles}
                    onOk={this.CustomerWaiting}
                    onCancel={() => this.setState({ visibles: false })}
                    closable=""
                >
                    <Card>
                        <h4>ชื่อ</h4>
                        <Input id="name" />
                        <br />
                        <h4>E-MAIL</h4>
                        <Input id="email" />
                        <br />
                        <h4>เบอร์ติดต่อ</h4>
                        <Input id="phone" />
                    </Card>

                </Modal>
            </Col>
        </div >)
    }
}

export default CarProfile