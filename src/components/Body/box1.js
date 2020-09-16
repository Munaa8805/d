import React from "react";
import classes from "./index.module.css";

const Box = (props) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.category}
        style={{}}
        src={props.img}
        alt={props.title}
      />
    </div>
  );
};
export default Box;
