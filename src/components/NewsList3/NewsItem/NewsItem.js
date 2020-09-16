import React from "react";
import Truncate from "react-truncate";

import classes from "./NewsItem.module.css";
import Date from "../../Date";

const NewsItem = (props) => {
  return (
    <div className={classes.col}>
      <div className={classes.container}>
        <img
          alt=""
          style={{ width: "90px", height: "60px", padding: "10px" }}
          className={classes.img}
          src={props.imgUrl}
        />
        <div className={classes.newsTitle}>
          <Truncate lines={3}>{props.newsTitle}</Truncate>

          <Date size="11px" date={props.date} category={props.category} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
