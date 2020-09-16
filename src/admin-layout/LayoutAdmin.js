import React, { Component } from 'react';

import classes from './LayoutAdmin.module.css';
import Aux from '../components/Admin/hoc/Aux/Aux';
import Toolbar from '../components/Admin/Navigation/Toolbar/Toolbar';
import Header from '../components/Admin/Navigation/Header/Header.js';
import SideDrawer from '../components/Admin/Navigation/SideDrawer/SideDrawer';
// import Footer from '../../components/Admin/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#EEEEEE", height: "100%" }}>
                    <div style={{ position: "absolute", zIndex: "20", height: "100%" }}> <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} /></div>
                    <div style={{ width: "290px" }}></div>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <Header title={this.props.children} />
                        <main style={{ marginLeft: "25px", marginRight: "25px", color: "#3c4858", height: "800px" }} className={classes.container}>
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Layout;