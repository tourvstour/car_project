import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (<div className="navB">
            <nav class="navbar navbar-expand-lg nav justify-content-center">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <img src="https://www.toyota.co.th/default/assets/img/bg/logo__toyota.png"  />
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}
export default Nav;