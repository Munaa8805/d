import React, { Component, useState } from "react";
import Truncate from "react-truncate";
import { FaReply, FaComment } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import classes from "./NewsItem.css";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { i: 0 };
    this.handleClick = this.handleClick.bind(this);
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
  arrowRemove = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };
  arrowAdd = () => {
    if (this.props.newsProg.day.length - 1 > this.state.i)
      this.setState({ i: this.state.i + 1 });
  };
  handleClick = () => {
    var e = this.state.i;
    var items = [];

    const j = Object.values(this.props.newsProg.list[this.state.i]);
    items.push();
    items.push(
      <div className={classes.row} style={{ justifyContent: "center" }}>
        <TiArrowBack
          onClick={() => this.arrowRemove()}
          className={classes.buttom}
          size={30}
        />
        <div style={{ fontSize: "30px", padding: "0 5px" }}>
          {this.props.newsProg.day[e]}
        </div>
        <TiArrowForward
          onClick={() => this.arrowAdd()}
          className={classes.buttom}
          size={30}
        />
      </div>
    );
    const length = this.props.newsProg.list[this.state.i][0].length - 1;
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
    const data = this.props.newsProg.list[0];
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
