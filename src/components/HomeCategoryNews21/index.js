import React, { Component } from "react";
// import Date from "../Date"
import classes from "./index.module.css";

class HomeCategory21 extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/list/video`)
      .then((res) => res.json())
      .then((json) => {
        console.log("listJson", json);
        this.setState({
          isLoaded: true,
          news: json.news,
        });
      });
  }
  render() {
    const { news, isLoaded } = this.state;
    if (isLoaded === false) {
      return "Loading";
    } else {
      return (
        <div className={classes.tooltip} style={{ marginLeft: "50px" }}>
          {" "}
          <span className={classes.tooltiptext}>{news[1].title} </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={classes.color}>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={"/detail/" + news[1].id}
              >
                <div className={classes.imageBox}>
                  <img
                    alt=""
                    src={`http://www.delhii.mn/${news[1].image}-large.jpg`}
                    style={{ width: "140px", height: "90px" }}
                  />
                </div>
              </a>
              <div className={classes.title1} style={{ padding: "5px" }}>
                <div
                  className={classes.text}
                  style={{
                    height: "80px",
                    fontSize: "14px",
                    fontFamily: "'Roboto'",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HomeCategory21;
