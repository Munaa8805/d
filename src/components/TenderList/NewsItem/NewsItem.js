import React from "react";
import Truncate from "react-truncate";
import { FaReply, FaComment } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import classes from "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <div className={classes.col}>
      <div className={classes.container}>
        <img className={classes.img} src={props.imgUrl} />
        <div className={classes.newsTitle}>
          <Truncate lines={3}>{props.newsTitle}</Truncate>
          <br />
          <div className={classes.soicial}>
            <div className={classes.detail}></div>
            <div className={classes.detail}>
              <span>
                <FaReply />5
              </span>
            </div>
            <div className={classes.detail}>
              <span>
                <FaComment />6
              </span>
            </div>
            <div className={classes.detail}>
              <span>
                <MdUpdate />
                5m
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
