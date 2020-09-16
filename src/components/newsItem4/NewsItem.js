import React, { Component } from "react";
import Truncate from "react-truncate";
import classes from "./NewsItem.css";
import Date from "../Date";

class NewsItem extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch(`http://103.119.92.97:3050/news/list/ulsTor`)
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
        <a style={{ textDecoration: "none" }} href={"/detail/" + news[3].id}>
          <div className={classes.col}>
            <div className={classes.container}>
              <img
                alt="alt"
                style={{ width: "120px", height: "90px", padding: "10px" }}
                className={classes.img}
                src={news[3].image}
              />
              <div className={classes.newsTitle}>
                <Truncate lines={2}>{news[3].title}</Truncate>

                <Date
                  style={{ marginTop: "10px" }}
                  size="14px"
                  date={news[3].date}
                  category={news[3].categoryname}
                />
              </div>
            </div>
          </div>
        </a>
      );
    }
  }
}

export default NewsItem;
