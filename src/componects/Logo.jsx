import React, { Component } from "react";
import { Carousel, Card, Col } from "antd";
class Logo extends Component {
    render() {
        return (
            <Carousel autoplay >
                <div>
                    <img src="/img/img_logo/restaurant10.jpg" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                </div>
            </Carousel>
        );
    }
}
export default Logo;
