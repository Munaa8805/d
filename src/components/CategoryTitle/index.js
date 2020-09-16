import React from "react";
import classes from "./index.module.css";
import { IoIosArrowForward } from "react-icons/io";

const CategoryTitle = (props) => {
  return (
    <div
      className={classes.Con}
      style={{
        height: "20px",
        fontSize: "15px",
        fontFamily: "'Roboto slab', sans-serif",
        width: props.width,
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
      }}
    >
      <span className={classes.Title} style={{ color: props.color }}>
        {props.title}
        <IoIosArrowForward size={25} className={classes.Symbol} />
        <IoIosArrowForward
          size={25}
          style={{ marginRight: "20px" }}
          className={classes.Symbol1}
        />
      </span>
    </div>
  );
};

export default CategoryTitle;
