import React, { Component } from "react";

import Aux from "../hoc/HigherOrder";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div className="app">
          <Toolbar
            openSideDrawer={this.switchSideDrawerHandler}
            auth={this.props.auth}
            logOut={this.props.onLogOut}
          />

          <main className="content">{this.props.children}</main>
          <div className="section-footer">
            <Footer />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Layout;
