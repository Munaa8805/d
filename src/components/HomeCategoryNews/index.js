import React from "react";
import classes from "./index.module.css";
const HomeCategory = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.color}>
        <div className={classes.imageBox}>
          <img
            alt="alt"
            src={props.img}
            style={{ width: "100%", height: "150px" }}
          />
        </div>
        <div className={classes.title1} style={{ padding: "5px" }}>
          <div style={{ height: "80px", fontSize: "12px" }}>{props.title1}</div>

          <div
            className={classes.text}
            style={{ height: "80px", fontSize: "14px", fontFamily: "'Roboto'" }}
          >
            {props.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
