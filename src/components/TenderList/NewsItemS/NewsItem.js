import React from "react";
import Truncate from "react-truncate";

import classes from "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={props.imgUrl} />
      <div className={classes.newsTitle}>
        <Truncate lines={3}>{props.newsTitle}</Truncate>
      </div>
    </div>
  );
};

export default NewsItem;
