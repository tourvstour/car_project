import React, { Component } from "react";
import { Carousel, Card, Col } from "antd";
class Promote extends Component {
  render() {
    return (

      <Carousel autoplay >
        <div>
          <img src="https://www.tqm.co.th/gallery/2410.jpg"  style={{  display: "block",marginLeft: "auto",marginRight:"auto"}}  />
        </div>
        <div>
          <img src="https://www.tqm.co.th/gallery/2410.jpg" style={{  display: "block",marginLeft: "auto",marginRight:"auto"}}/>
        </div>
      </Carousel>

    );
  }
}
export default Promote;
