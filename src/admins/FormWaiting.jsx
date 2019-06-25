import React, { Component } from 'react'
import { Table, Modal, Select, Button, Tag, Popconfirm } from 'antd'
const { Option } = Select

class FormWaiting extends Component {
    constructor() {
        super()
        this.state = {
            bottomSt: "",
            statNumber: "",
            carId: [],
            modalVisibel: false,
            stat: [],
            dataTable: [],
            column: [{
                title: "ผู้ติดต่อ",
                children: [{
                    title: "ลำดับที่",
                    dataIndex: "rown"
                },
                {
                    title: "ชื่อ",
                    dataIndex: "custommer_name"
                },
                {
                    title: "เบอร์ติดต่อ",
                    dataIndex: "custommer_phone"
                },
                {
                    title: "E-Mail",
                    dataIndex: "custommer_email"
                },
                {
                    title: "สถานะผู้จอง",
                    dataIndex: "custommer_status_name",
                },
                {
                    title: "ยกเลิกผู้จอง",
                    dataIndex: "custommer_id",
                    render: custommer_id =>
                        <Popconfirm
                            title="ยืนยันการยกเลิก?"
                            onConfirm={() => this.delete(custommer_id)}
                        >
                            <Tag color="red">ลบ</Tag>
                        </Popconfirm>
                }]
            }, {
                title: "สถานะสินค้า",
                children: [{
                    title: "linkรถ",
                    dataIndex: "car_product_id"
                },
                {
                    title: "สถานะสินค้าปัจจุบัน",
                    dataIndex: "car_status_name"
                },
                {
                    title: "แก้ไข",
                    render: (car_product_id, st) => (<div>
                        <Button onClick={() => this.ChangeStat(car_product_id)} >แก้ไขสถานะ</Button>
                    </div>)
                }]
            }]
        }
    }
    componentDidMount() {
        fetch("http://183.88.219.85:9091/api/show_stat.php")
            .then(stat => stat.json())
            .then(stat => {
                this.setState({
                    stat: stat
                })
            })
        fetch("http://183.88.219.85:9091/api/waiting_car.php", {
            method: "POST",
            body: JSON.stringify({
                type: "waiting"
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataTable: res
                })
            })
    }

    ChangeStat = (e) => {
        console.log(e)
        let data = [e]
        this.setState({
            modalVisibel: true,
            carId: data
        })

    }

    modalCancel = () => {
        this.setState({
            modalVisibel: false
        })
    }

    selectStat = (e) => {
        //console.log(e)
        this.setState({
            statNumber: e.toString()
        })
    }

    onSave = () => {
        let saveCarStat = this.state.statNumber.toString(),
            saveCarId = this.state.carId.map(a => a.car_product_id).toString(),
            saveCustomer = this.state.carId.map(a => a.custommer_id).toString()
        fetch("http://183.88.219.85:9091/api/set_waiting.php", {
            method: "POST",
            body: JSON.stringify({
                saveCarStat: saveCarStat,
                saveCarId: saveCarId,
                saveCustomer: saveCustomer
            })
        }).then(() => {
            fetch("http://183.88.219.85:9091/api/waiting_car.php", {
                method: "POST",
                body: JSON.stringify({
                    type: "waiting"
                })
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataTable: res,
                        modalVisibel: false,
                        statNumber: ""
                    })
                })
        })
    }

    delete = (e) => {
        console.log(e)
        fetch("http://183.88.219.85:9091/api/cancel_custommer_waiting.php", {
            method: "POST",
            body: JSON.stringify({
                id: e.toString()
            })
        }).then(next => {
            fetch("http://183.88.219.85:9091/api/waiting_car.php", {
                method: "POST",
                body: JSON.stringify({
                    type: "waiting"
                })
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataTable: res
                    })
                })
        })
    }

    render() {
        return (<div>
            <br />
            <br />
            <Button onClick={() => window.location.href = "/formwaiting"}> ผู้สนใจ</Button>{" "}
            <Button onClick={() => window.location.href = "/custommerwaiting"}> รายการติดจอง</Button>
            <br />
            <br />
            <Table bordered columns={this.state.column} dataSource={this.state.dataTable} />
            <Modal
                okButtonDisabled={true}
                onOk={this.onSave}
                onCancel={this.modalCancel}
                visible={this.state.modalVisibel}>
                <div>
                    <h3>คุณ:{"   "}{this.state.carId.map(a => a.custommer_name)} </h3>
                    <h3>เบอร์ติดต่อ:{"   "}{this.state.carId.map(a => a.custommer_email)}</h3>
                    <h3>E-Mail:{"   "}{this.state.carId.map(a => a.custommer_phone)}  </h3>
                </div>
                <Select style={{ width: 200 }} onSelect={this.selectStat} disabled={this.state.carId.map(a => a.st).toString()}>
                    {this.state.stat.map(a => (
                        <Option value={a.car_status_id}>{a.car_status_name}</Option>
                    ))}
                </Select>
            </Modal>
        </div>)
    }
}

export default FormWaiting