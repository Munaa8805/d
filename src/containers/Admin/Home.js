import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import LayoutAdmin from "../../admin-layout/LayoutAdmin";
import Editor from "./Editor/Editor";
import Video from "../../components/videoEditor";
import Banner from "../../components/bannerEditor";

import List from "./ListNews";
import ListVideo from "./ListVideos";
import ListBannner from "./ListBanner";

import Login from "./Login";
import Logout from "./Login/Logout/Logout.js";
import * as actions from "../../store/actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes;

    if (true) {
      routes = (
        <LayoutAdmin>
          <Switch>
            <Route path="/admin/editor/:id" component={Editor} />
            <Route path="/admin/video/:id" component={Video} />
            <Route path="/admin/banner/:id" component={Banner} />
            {/* <Route path="/admin/program/:id" component={Program} /> */}
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/list" component={List} />
            <Route path="/admin/listVideo" component={ListVideo} />
            {/* <Route path="/admin/listProgram" component={ListProgram} /> */}
            <Route path="/admin/listBanner" component={ListBannner} />
            <Route path="/admin/logout" component={Logout} />
          </Switch>
        </LayoutAdmin>
      );
    }

    return routes;
  }
}

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.token !== null
  };
};

const maptDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, maptDispatchToProps)(Home));
