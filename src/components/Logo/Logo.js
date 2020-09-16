import React from "react";
import Logo from "../../assets/images/logowhite.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <a href={"/"}>
      <img
        style={{ width: props.width, height: props.height }}
        src={Logo}
        alt="Logo"
      />
    </a>
  </div>
);

export default logo;
