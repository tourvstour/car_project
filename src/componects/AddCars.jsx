import React, { Component } from "react";
import { Form, Upload, Input, Select, Button, Icon, message } from "antd";
import { from } from "rxjs";

const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};
const Dragger = Upload.Dragger;

class AddCars extends Component {
  constructor() {
    super();
    this.state = {
      brandCar: [],
      serie: [],
      serieType: [],
      serieDescription: [],
      gear: [],
      brand: "",
      series: "",
      serieTypes: "",
      serieDescriptions: "",
      gears: "",
      uploadProps: {
        name: 'file',
        multiple: true,
        action: false
      },
      fileList: [],
      uploading: false
    }
  }
  componentDidMount() {
    fetch("http://183.88.219.85:7073/api/topic_admin.php", {
      method: "POST",
      body: JSON.stringify({
        type: "brandCar"
      })
    })
      .then(brandCar => brandCar.json())
      .then(brandCar => {
        this.setState({
          brandCar: brandCar
        })
      })
    fetch("http://183.88.219.85:7073/api/topic_admin.php", {
      method: "POST",
      body: JSON.stringify({
        type: "serie"
      })
    })
      .then(serie => serie.json())
      .then(serie => {
        this.setState({
          serie: serie
        })
      })
    fetch("http://183.88.219.85:7073/api/topic_admin.php", {
      method: "POST",
      body: JSON.stringify({
        type: "serieType"
      })
    })
      .then(serieType => serieType.json())
      .then(serieType => {
        this.setState({
          serieType: serieType
        })
      })
    fetch("http://183.88.219.85:7073/api/topic_admin.php", {
      method: "POST",
      body: JSON.stringify({
        type: "serieDescription"
      })
    })
      .then(serieDescription => serieDescription.json())
      .then(serieDescription => {
        this.setState({
          serieDescription: serieDescription
        })
      })
    fetch("http://183.88.219.85:7073/api/topic_admin.php", {
      method: "POST",
      body: JSON.stringify({
        type: "gear"
      })
    })
      .then(gear => gear.json())
      .then(gear => {
        this.setState({
          gear: gear
        })
      })
  }

  BranCar = (e) => {
    this.setState({
      brand: e
    })
  }
  Serie = (e) => {
    this.setState({
      series: e
    })
  }
  serieType = (e) => {
    this.setState({
      serieTypes: e
    })
  }
  serieDescription = (e) => {
    this.setState({
      serieDescriptions: e
    })
  }
  Gear = (e) => {
    this.setState({
      gears: e
    })
  }

  Uploads = (e) => {
    console.log(e.fileList)
    this.setState({
      filesList: e
    })
  }

  Save = () => {
    let data = [{
      brand: this.state.brand,
      serie: this.state.series,
      serie_types: this.state.serieTypes,
      serie_descriptions: this.state.serieDescriptions,
      gear: this.state.gears,
      type_car: document.getElementById('typeCar').value,
      year: document.getElementById('year').value,
      engine: document.getElementById('engine').value,
      seat: document.getElementById('seat').value,
      mile: document.getElementById('mile').value,
      color: document.getElementById('color').value,
      price: document.getElementById('price').value
    }]
    data.forEach(element => {
      if (element.brand === "" || element.serie === "" || element.serie_types === "" || element.serie_descriptions === "" || element.gear === "" || element.type_car === ""
        || element.year === "" || element.engine === "" || element.seat === "" || element.mile === "" || element.color === "" || element.price === "") {
        console.log("ระบุข้อมูลให้ครบก่อนทำการบันทึก")
      }
    });

    fetch("http://183.88.219.85:7073/api/save_cars.php", {
      method: "POST",
      body: JSON.stringify({
        data: data
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.map(a => a.stat))
        let car_id = res.map(a => a.car_id),
          stat = res.map(a => a.stat).toString()
        if (stat === "200") {
          let fileList = this.state.fileList
          let formData = new FormData()

          fileList.forEach(file => {
            formData.append("files[]", file)
            formData.append("car_id", car_id)
            formData.append("fileName", 'cars')
          })

          fetch("http://183.88.219.85:7073/api/save_img.php", {
            method: "POST",
            body: formData
          })
        }
        else {
          console.log("aaa")
        }
      })

  }

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };
    return (
      <div>
        <Form {...formItemLayout} >
          <Form.Item label="ประเภทรถ">
            <Input id="typeCar" />
          </Form.Item>
          <Form.Item label="ยี้ห้อ">
            <Select onChange={this.BranCar}>
              {this.state.brandCar.map(a => (
                <Option value={a.product_brand_id}>{a.product_brand_description}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="รุ่น">
            <Select onChange={this.Serie}>
              {this.state.serie.map(a => (
                <Option value={a.product_serie_id}>{a.product_serie_description}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="โฉมยนต์">
            <Select onChange={this.serieType}>
              {this.state.serieType.map(a => (
                <Option value={a.product_serie_type_id}>{a.product_serie_type_description}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="รายละเอียดรุ่น">
            <Select onChange={this.serieDescription}>
              {this.state.serieDescription.map(a => (
                <Option value={a.product_serie_description_id}>{a.product_serie_description_description}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="ปี">
            <Input id="year" />
          </Form.Item>
          <Form.Item label="ขนาดเครื่องยนต์">
            <Input id="engine" />
          </Form.Item>
          <Form.Item label="ระบบเกียร์">
            <Select onChange={this.Gear}>
              {this.state.gear.map(a => (
                <Option value={a.product_gear_id}>{a.product_gear_description}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="จำนวนที่นั่ง">
            <Input id="seat" />
          </Form.Item>
          <Form.Item label="เลขไมล์(กม.)">
            <Input id="mile" />
          </Form.Item>
          <Form.Item label="สี">
            <Input id="color" />
          </Form.Item>
          <Form.Item label="ราคา">
            <Input id="price" />
          </Form.Item>
          <Upload
            {...props}
            listType="picture-card"
            multiple="true"
          >
            <Button>uplode</Button>
          </Upload>
          <Button onClick={this.Save}>บันทึก</Button>
        </Form>
      </div>
    );
  }
}

export default AddCars;
