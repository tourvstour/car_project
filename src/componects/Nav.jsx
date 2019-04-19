import React, { Component } from "react";
import { Icon, Card } from 'antd'

class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href=""> <img src="/img/img_logo/restaurant10.jpg" style={{ display: "block", marginLeft: "auto", marginRight: "auto",height:"80px" }} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <div style={{ fontSize: "24px" }}>
                            <li className="nav-item"> <a href="/sale">สินค้า</a></li>
                        </div>
                    </ul>
                    <div>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;