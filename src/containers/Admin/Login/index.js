import React, { Component } from "react";
import classes from "./index.css";
import { MdPerson } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: false,
      pass: "",
      email: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.pass, false);
  };

  render() {
    const { pass, email } = this.state;
    // console.log(pass,email)

    return (
      <div className="Apps" style={{ width: "100%", height: "100%" }}>
        <div
          className="blurred-box"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="user-login-box">
            <span className="user-icon"></span> <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div className="login-icon">
                {" "}
                <IconContext.Provider
                  value={{ size: "20px" }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "8px", color: "#5891FE" }}>
                    <MdPerson />
                  </div>
                </IconContext.Provider>
              </div>
              <input
                value={this.state.email}
                className="user-password"
                type="text"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <br />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="login-icon">
                <IconContext.Provider
                  value={{ size: "20px" }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "8px", color: "#5891FE" }}>
                    <RiShieldKeyholeLine />
                  </div>
                </IconContext.Provider>
              </div>
              <input
                value={this.state.pass}
                className="user-password"
                type="password"
                onChange={(e) => this.setState({ pass: e.target.value })}
              />
              <br />
            </div>
            <input type="submit" value="SIGN IN" onClick={this.submitHandler} />
            <br />
            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
