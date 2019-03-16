import React, { Component } from "react";
import { Card, Icon, Tree } from "antd";
const { TreeNode } = Tree;

class Suv extends Component {
  render() {
    return (
      <div>
        <Card
          style={{ width: 300, borderRadius: "10px" }}
          cover={
            <img src="http://s4.boxzaracing.com/news/0b/1r/1467779504.jpg" />
          }
        >
          <Tree
            showIcon
            switcherIcon={<Icon type="caret-down" />}
            style={{ fontSize: "20px" }}
          >
            <TreeNode title="Suv">
              <TreeNode title="leaf" />
              <TreeNode title="leaf" />
            </TreeNode>
          </Tree>
        </Card>
      </div>
    );
  }
}

export default Suv;
