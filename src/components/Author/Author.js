import React from "react";
import classes from "./Author.module.css";
// import Date from '../Date';

const Author = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={props.authorImage}
          alt={props.authorName}
        />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.name}>{props.authorName}</div>
        <div className={classes.category}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "5px",
            }}
          >
            {props.category.map((cat) => (
              <div>
                <span style={{ fontSize: "14px", color: "#0054a5" }}>
                  &nbsp;{cat}&nbsp;
                </span>
                <span>/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
