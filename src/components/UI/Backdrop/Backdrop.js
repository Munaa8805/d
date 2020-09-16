import React from "react";
import classes from "./Backdrop.css";

const backdrop = (props) =>
  props.show ? (
    <div
      className={classes.Backdrop}
      onClick={props.clicked}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 100,
        left: 0,
        top: 0,
        backgroundColor: "0.0.0.0.5",
      }}
    ></div>
  ) : null;

export default backdrop;
