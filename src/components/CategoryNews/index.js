import React from "react";
import { FaHeart, FaRegEye, FaComment } from "react-icons/fa";
import classes from "./index.module.css";

import Date from "../Date";
import TruncateMarkup from "react-truncate-markup";

const NewsCategory = (props) => (
  <div
    className={classes.background}
    style={{
      display: "flex",
      flexDirection: "row",
      width: "850px",
      height: "200px",
      alignItems: "center",
      marginBottom: "20px",
      paddingTop: "20px",
      borderTop: "1px solid #e6e6e6",
    }}
  >
    <img
      alt="alt"
      src={props.img}
      style={{ width: "300px", height: "200px", padding: "0", margin: "0" }}
    />
    <div
      style={{
        width: "550px",
        height: props.imgHeight,
        marginLeft: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontFamily: "Roboto Condensed", fontSize: "18px" }}>
        <TruncateMarkup lines={2}>
          <div>{props.title}</div>
        </TruncateMarkup>
      </div>

      <div
        style={{
          fontSize: "11px",
          display: "flex",
          alignItems: "center",
          paddingBottom: "5px",
          paddingTop: "5px",
        }}
      >
        <Date date={props.date} />
      </div>

      <div style={{ fontSize: "13px", textAlign: "justify" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            justifyItems: "space-between",
            alignItems: "center",
          }}
        >
          <FaHeart className={classes.heart} />
          5&nbsp;
          <FaRegEye className={classes.eye} />
          4&nbsp;
          <FaComment className={classes.comment} />3
        </div>
      </div>
    </div>
  </div>
);

export default NewsCategory;
