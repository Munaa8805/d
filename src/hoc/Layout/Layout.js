import React, { Component } from "react";
// import { Row, Col } from 'reactstrap';
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    a: "2",
    isLoading: false,
    banner: "",
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

export default Layout;
