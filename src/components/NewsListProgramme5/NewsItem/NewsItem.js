import React, { Component, useState } from "react";
import Truncate from "react-truncate";
import { FaReply, FaComment } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import classes from "./NewsItem.css";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { i: 0 };
  }

  handleChange = (e) => {
    this.setState({
      i: e.target.value,
    });
  };
  onClick = (e) => {
    alert(e.currentTarget.dataset.id);
    this.props.test = "www.google.mn";
  };
  handleClick = (e) => {
    const length = this.props.newsProg.list[e][0].length - 1;
    const j = Object.values(this.props.newsProg.list[e]);
    var items = [];
    items.push(<h2>{this.props.newsProg.day[e]}</h2>);
    for (var i = 0; i <= length; i++) {
      items.push(
        <li onClick={this.onClick} data-id={i}>
          {" "}
          <Truncate lines={1} ellipsis={<span></span>}>
            {j[0][i]}&nbsp;{j[1][i]}
          </Truncate>
        </li>
      );
    }
    return items;
  };
  render() {
    return (
      <div className={classes.col}>
        <div className={classes.programm}>
          <ul>{this.handleClick(this.state.i)}</ul>
        </div>
      </div>
    );
  }
}

export default NewsItem;
