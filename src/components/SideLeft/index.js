import React, { Component } from "react";
import NewsListProgramme1 from "../NewsListProgramme1/NewsList";

import classes from "./index.module.css";
import Carousel from "nuka-carousel";

import Tab from "../Tab/index";
import Tab1 from "../Tab1/index";
import Scroll from "../Scroll/index";
import Scroll1 from "../Scroll1/index";
import NewsList from "../NewsList/NewsList";
import { FaEye, FaRegComment } from "react-icons/fa";
import {
  MdAutorenew,
  MdNavigateNext,
  MdNavigateBefore,
  MdOndemandVideo,
} from "react-icons/md";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";

class sideLeft extends Component {
  state = {
    slideIndex: 0,
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.props.onScrollInit();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 2 }),
    };

    fetch("http://103.119.92.85:5000/news/program", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("json.data", json);
        this.setState({
          data: json.tvProgram,
          banner: json.banner,
          isLoading: true,
        });
      });
  }

  render() {
    if (!this.state.isLoading) {
      return "...";
    }
    console.log("data", this.state.data);
    const list = {
      id: 2,
      content: [
        <Scroll
          height="428px"
          item={
            <NewsList
              newsData={this.props.news}
              isLoading={this.props.isLoading}
            />
          }
          scrollAdd={this.props.onScrollAdd}
          counter={this.props.counter}
        />,
        <Scroll
          height="428px"
          item={
            <NewsList
              newsData={this.props.news}
              isLoading={this.props.isLoading}
            />
          }
          scrollAdd={this.props.onScrollAdd}
        />,
        <Scroll
          height="428px"
          item={
            <NewsList
              newsData={this.props.news}
              isLoading={this.props.isLoading}
            />
          }
          scrollAdd={this.props.onScrollAdd}
        />,
        <Scroll
          height="428px"
          item={
            <NewsList
              newsData={this.props.news}
              isLoading={this.props.isLoading}
            />
          }
          scrollAdd={this.props.onScrollAdd}
        />,
      ],
      title: [
        <MdAutorenew size={20} />,
        <FaEye size={20} />,
        <FaRegComment size={20} />,
      ],
      title1: ["ШИНЭ МЭДЭЭ", "ИХ УНШСАН", "ИХ СЭТГЭГДЭЛТЭЙ"],
    };
    const list2 = {
      id: 5,
      content: [
        <Scroll1
          height="350px"
          item={<NewsListProgramme1 newsData={this.state.data} />}
        />,
        <Scroll1
          height="352px"
          item={<NewsListProgramme1 newsData={this.state.data} />}
        />,
        <Scroll1
          height="352px"
          item={<NewsListProgramme1 newsData={this.state.data} />}
        />,
        <Scroll1
          height="352px"
          item={<NewsListProgramme1 newsData={this.state.data} />}
        />,
        <Scroll1
          height="352px"
          item={<NewsListProgramme1 newsData={this.state.data} />}
        />,
      ],
      title: [
        <img alt="" src="http://www.mnb.mn/images/mini/tv.png" width="36" />,
        <img src="http://www.mnb.mn/images/mini/mnews.png" />,
        <img src="http://www.mnb.mn/images/mini/mradio.png" />,
        <img src="http://www.mnb.mn/images/mini/sport.png" />,
        <img src="http://www.mnb.mn/images/mini/MNB_world.png" />,
      ],
      title1: [
        "МҮОНТ",
        "МОНГОЛЫН МЭДЭЭ",
        "МҮОНР",
        "MNB СПОРТ HD",
        "MNB WORLD ",
      ],
    };
    return (
      <div className={classes.content} style={{ width: "240px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              marginRight: "6px",
              height: "40px",
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0246A5",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto Condensed",
                fontSize: "15px",
                color: "white",
              }}
            >
              МЭДЭЭНИЙ ЖАГСААЛТ
            </span>
          </div>
          <Tab list={list} id={3} />
        </div>
        {/* <div style={{marginTop:"10px",width:"240px",height:"240px",backgroundColor:"green"}}> */}

        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={(slideIndex) => this.setState({ slideIndex })}
          renderCenterLeftControls={({ previousSlide }) => (
            <div className={classes.button} onClick={previousSlide}>
              <MdNavigateBefore size={65} />
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div className={classes.button} onClick={nextSlide}>
              <MdNavigateNext size={65} />
            </div>
          )}
        >
          {this.state.banner.map((item, i) => (
            <div key={i}>
              <a href={item.link}>
                <img
                  alt=""
                  src={`${item.image}`}
                  style={{ width: "240px", height: "240px", marginTop: "10px" }}
                />
              </a>
            </div>
          ))}
        </Carousel>
        {/* </div> */}
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #E6E6E6",
          }}
        >
          <div
            style={{
              marginRight: "6px",
              height: "40px",
              width: "240px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0246A5",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto Condensed",
                fontSize: "15px",
                color: "white",
              }}
            >
              ХӨТӨЛБӨР
            </span>
          </div>
          <Tab1 list={list2} id={5} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.sideLeft.news,
    isLoading: state.sideLeft.isLoading,
    counter: state.sideLeft.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onScrollInit: () => {
      dispatch(actions.scrollInit());
    },
    onScrollAdd: (test) => {
      dispatch(actions.scrollAdd(test));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(sideLeft);
