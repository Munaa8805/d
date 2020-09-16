import React, { Component } from "react";
import axios from "../../axios-connect";

import classes from "./index.css";
import Carousel from "nuka-carousel";
import SideLeft from "../../components/SideLeft";
import Social from "../../components/newsSocial";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoMdTime } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import BoxMedium from "../../components/BoxMedium";
import NewsList from "../../components/NewsList/NewsList";
import Footer from "../../components/Footer";
import ReactPaginate from "react-paginate";
// require("bootstrap/less/bootstrap.less");

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      pageCount: 20,
      backcolor: `${document.getElementById("1")}`,
      pnp: "1",
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    axios
      .post("news/list", {
        Page: 1,
        NewsCount: 2,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    var property = document.getElementById(1);
    this.state.backcolor = document.getElementById(1);
    (property.style.backgroundColor = "#F5F5F5"),
      (property.style.borderBottom = "1px solid #6C87B2");
    property.style.color = "black";
    const { id } = this.props.match.params;
    fetch(`http://103.119.92.47:3050/news/newsAll`)
      .then((res) => res.json())
      .then((json) => {
        //console.log("json",json)
        this.setState({
          name: json.name,
          isLoaded: true,
          news: json.news,
          page: json.page,
        });
      });
  }
  getData(btn) {
    // const { userId } = this.state;

    var property = document.getElementById(btn);

    if (this.state.backcolor != "null" && property != null) {
      var property1 = this.state.backcolor;
      property1.style.backgroundColor = "white";
      property1.style.borderBottom = "1px solid white";
      property1.style.color = "#9A9B9F";
      this.setState({
        backcolor: document.getElementById(btn),
        pnp: btn,
      });
      (property.style.backgroundColor = "#F5F5F5"),
        (property.style.borderBottom = "1px solid #6C87B2");
      property.style.color = "black";
    }
  }

  render() {
    return (
      <div className={classes.newsContainer}>
        <div className={classes.lrow}>
          <div style={{ marginLeft: "-150px", marginTop: "20px" }}>
            <div
              style={{
                border: "1px solid",
                height: "200px",
                width: "200px",
                marginLeft: "90px",
                color: "grey",
                backgroundColor: "grey",
              }}
            >
              <center>
                <h4 style={{ color: "black" }}>banner</h4>
              </center>
            </div>

            <div style={{ height: "100px", marginLeft: "80px" }}>
              <NewsList />
            </div>
          </div>
          <div style={{ marginLeft: "-150px" }}>
            <div
              style={{
                border: "1px solid",
                height: "200px",
                width: "200px",
                marginLeft: "90px",
                color: "grey",
                backgroundColor: "grey",
                marginTop: "250px",
              }}
            >
              <center>
                <h4 style={{ color: "black" }}>banner</h4>
              </center>
            </div>

            <div style={{ height: "100px", marginLeft: "80px" }}>
              <NewsList />
            </div>
          </div>
          <div style={{ marginLeft: "-150px" }}>
            <div
              style={{
                border: "1px solid",
                height: "200px",
                width: "200px",
                marginLeft: "90px",
                color: "grey",
                backgroundColor: "grey",
                marginTop: "250px",
              }}
            >
              <center>
                <h4 style={{ color: "black" }}>banner</h4>
              </center>
            </div>

            <div style={{ height: "100px", marginLeft: "80px" }}>
              <NewsList />
            </div>
          </div>
        </div>
        <div className={classes.newsCenter}>
          <div style={{ marginLeft: "40px" }}>
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/tv-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/netflix.png"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/L3KXJa2KBwhcbQXB6noFhk-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/Харли-Квинний-1-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/tv-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/netflix.png"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/L3KXJa2KBwhcbQXB6noFhk-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/25750520-8092969-image-a-4_1583782639980.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/Харли-Квинний-1-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />
            <BoxMedium
              width="850px"
              img="https://news.mn/wp-content/uploads/2020/03/tv-810x500.jpg"
              imgWidth="300px"
              imgHeight="150px"
            />

            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                height: "30px",
                width: "100%",
                borderTop: "1px solid #E6E6E6",
                borderBottom: "1px solid #E6E6E6",
                marginBottom: "10px",
              }}
            >
              <div
                className={classes.nextButton}
                onClick={this.getData.bind(this, this.state.pnp - 1)}
              >
                <MdNavigateBefore size={25} />
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 1)}
                id="1"
                type="button"
              >
                1
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 2)}
                id="2"
                type="button"
              >
                2
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 3)}
                id="3"
                type="button"
              >
                3
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 4)}
                id="4"
                type="button"
              >
                4
              </div>
              <div
                className={classes.button}
                onClick={this.getData.bind(this, 5)}
                id="5"
                type="button"
              >
                5
              </div>
              <div
                className={classes.prevButton}
                onClick={this.getData.bind(this, this.state.pnp + 1)}
              >
                <MdNavigateNext size={25} />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default List;
