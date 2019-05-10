import React, { Component } from 'react'
import Nav from './Nav'
import ImageGallery from 'react-image-gallery'
import { Row, Col, Card } from 'antd'


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
            profile: []
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
    render() {
        return (<div>
            <Nav />
            <Col lg={{ span: 22, offset: 2 }}>
                <Row>
                    <Col lg={{ span: 10 }}>
                        <ImageGallery items={this.state.images} thumbnailPosition="left" showFullscreenButton="" showPlayButton="" />
                    </Col>
                    <Col lg={{ span: 10, offset: 1 }}>
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
                                    <td>สี:</td>
                                    <td>{this.state.profile.map(a => a.color)}</td>
                                </tr>
                                <tr>
                                    <td>รูป</td>
                                    <td>Price:</td>
                                    <td>{this.state.profile.map(a => a.price)}</td>
                                </tr>
                            </table>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div >)
    }
}

export default CarProfile