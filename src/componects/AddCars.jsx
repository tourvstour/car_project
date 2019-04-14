import React, { Component } from "react";
import { Form, Upload, Input, Select, Button } from "antd";

const Option = Select;
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
class AddCars extends Component {
  Submit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.Submit}>
          <Form.Item label="ประเภทรถ">
            <Input id="typeCar" />
          </Form.Item>
          <Form.Item label="ยี้ห้อ">
            <Select>
              <Option value="1">Option 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="รุ่น">
            <Select>
              <Option value="1">Option 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="โฉมยนต์">
            <Select>
              <Option value="1">Option 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="รายละเอียดรุ่น">
            <Select>
              <Option value="1">Option 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="ปี">
            <Input />
          </Form.Item>
          <Form.Item label="ขนาดเครื่องยนต์">
            <Input />
          </Form.Item>
          <Form.Item label="ระบบเกียร์">
            <Select>
              <Option value="1">Option 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="จำนวนที่นั่ง">
            <Input />
          </Form.Item>
          <Form.Item label="เลขไมล์(กม.)">
            <Input />
          </Form.Item>
          <Form.Item label="สี">
            <Input id="s"/>
          </Form.Item>
          <Button htmlType="submit">บันทึก</Button>
        </Form>
      </div>
    );
  }
}

export default AddCars;
