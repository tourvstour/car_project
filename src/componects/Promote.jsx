import React, { Component } from "react";
import { Carousel, Card, Col } from "antd";
class Promote extends Component {
  render() {
    return (
      <div>
        <br />
        <Carousel autoplay >
          <div>
            <img src="https://www-asia.nissan-cdn.net/content/dam/Nissan/th/home/leaflaunch28nov/LEAF_HERO_1742x756-01-2.jpg.ximg.full.hero.jpg" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
          </div>
          <div>
            <img src="https://www-asia.nissan-cdn.net/content/dam/Nissan/th/home/Hero%20Banner%20Nissan%20Note/Desktop%201742x756.jpg.ximg.full.hero.jpg" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Promote;
