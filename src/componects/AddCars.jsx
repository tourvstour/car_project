import React, { Component } from "react";
import { Form, Upload, Input, Select } from "antd";

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
  render() {
    return (
      <div>
        <Form {...formItemLayout}>
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
            <Input />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddCars;
