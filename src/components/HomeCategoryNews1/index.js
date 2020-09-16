import React, { Component } from "react";
// import Date from "../Date"
import classes from "./index.module.css";
const HomeCategory = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.color}>
        <div className={classes.imageBox}>
          <img
            alt={props.title1}
            src={props.img}
            style={{ width: "500px", height: "350px" }}
          />
          <span
            img={require(`../../components/assets/play.jpg`)}
            className={classes.image1}
          ></span>
        </div>
        <div className={classes.title1} style={{ padding: "5px" }}>
          <div style={{ height: "80px", fontSize: "18px" }}>{props.title1}</div>

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
