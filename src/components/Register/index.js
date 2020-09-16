import React, { Component } from "react";
import classes from "./index.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      icon: "",
    };
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <form className={classes.button}>
          <div>Бүртгүүлэх</div>
        </form>
      </div>
    );
  }
}

export default Register;
