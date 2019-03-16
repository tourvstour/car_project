import React, { Component } from "react";
import { Carousel } from "antd";
class Promote extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
            <img src="https://www.tqm.co.th/gallery/2410.jpg" width="250" />
          </div>
          <div>
            <h3>2</h3>
            <img src="https://www.tqm.co.th/gallery/2410.jpg" width="250" />
          </div>
        </Carousel>
        ,
      </div>
    );
  }
}
export default Promote;
