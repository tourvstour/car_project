import React, { Component } from 'react'
import { Col, Card, message, Button } from 'antd'

const { Meta } = Card;
class Setimage extends Component {
    constructor() {
        super();
        this.state = {
            img: [],
            imgSelect: "",
            imgId: ""
        }
    }

    componentDidMount() {
        let id = window.location.search.split("?id=")[1]
        console.log(id)
        fetch("http://183.88.219.85:9091/api/set_img.php", {
            method: "POST",
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json())
            .then(res => {
                this.setState({
                    img: res,
                    imgId: id
                })
            })
    }

    Setimg = (e) => {
        console.log(e)
        this.setState({
            imgSelect: e
        })
    }

    Update = () => {
        fetch("http://183.88.219.85:9091/api/update_img_index.php", {
            method: "POST",
            body: JSON.stringify({
                id: this.state.imgId,
                imgName: this.state.imgSelect
            })
        })
            .then(res => res.json())
            .then(res => {
                let stat = res.map(a => a.stat).toString(),
                    mess = res.map(a => a.message).toString()
                console.log(stat)
                if (stat === "200") {
                    message.success(mess)
                        .then(next => {
                            window.location.href = "/admin"
                        })
                }
            })
    }
    render() {
        return (
            <div>
                <Col lg={{ span: "20", offset: "2" }}>

                    <Card hoverable style={{ height: "480px", width: "auto", textAlign: "center" }}>
                        <img src={`/api/img/${this.state.imgSelect}`} style={{ height: "350px", width: "auto" }} />
                        <br />
                        <br />
                        <h4>รูปหน้าปก</h4>
                        <Button onClick={this.Update}>Update</Button>
                    </Card>
                    <Card style={{ textAlign: "center" }}>
                        {this.state.img.map(a => (
                            <Col lg={{ span: "4" }}>
                                <Card hoverable
                                    cover={<img src={`/api/img/${a.img_name}${a.img_type}`} />}
                                    actions={<Button onClick={() => this.Setimg(a.img_name + a.img_type)}>เลือกรูปหน้าปก</Button>}
                                >
                                    <Button onClick={() => this.Setimg(a.img_name + a.img_type)}>เลือกรูปหน้าปก</Button>
                                </Card>
                                <br />
                            </Col>
                        ))}
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Setimage;