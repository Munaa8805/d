import React, { Component } from "react";
import classes from "./index.module.css";

import Layout from "../../hoc/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import CategoryNews from "../../components/CategoryNews";
import NewsList from "../../components/NewsList/NewsList";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      name: "",
      page: "",
      isLoaded: false,
      btn: [],
      pnp: 1,
      banner: "",
      backcolor: `${document.getElementById("1")}`,
    };
    this.getData = this.getData.bind(this);
    this.btnClick = this.getData.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://103.119.92.97:3050/news/category/${id}/${1}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("newsJson", json);
        var a = [];
        for (var i = 1; json.page >= i; i++) {
          a[i - 1] = i;
        }
        this.setState({
          name: json.name,
          isLoaded: true,
          news: json.news,
          page: json.page,
          btn: a,
          backcolor: document.getElementById(1),
        });
      });
  }

  getData(btn, color) {
    const { id } = this.props.match.params;
    var property = document.getElementById(btn);

    if (this.state.backcolor !== "null" && property !== null) {
      var property1 = this.state.backcolor;
      property1.style.backgroundColor = "white";
    }
    fetch(`http://103.119.92.97:3050/news/category/${id}/${btn}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("delhiiJson", json);
        this.setState({
          name: json.name,
          isLoaded: true,
          news: json.news,
          pnp: btn,
          backcolor: document.getElementById(btn),
        });
      })
      .then(() => {
        property.style.backgroundColor = color;
      });
  }

  render() {
    var { isLoaded, news, name, btn } = this.state;
    if (!isLoaded) {
      return "...";
    }
    return (
      <Layout onClick={this.toggleIsLoaded}>
        <div className={classes.newsContainer}>
          <div style={{ marginLeft: "40px" }} className={classes.lrow}>
            <div style={{ marginLeft: "-150px", marginTop: "-130px" }}>
              <div
                style={{
                  border: "1px solid",
                  height: "200px",
                  width: "200px",
                  marginLeft: "90px",
                  color: "grey",
                  backgroundColor: "white",
                  marginTop: "160px",
                }}
              >
                <img
                  alt="alt"
                  src={require(`../../components/assets/banner1.gif`)}
                />
              </div>
              <div style={{ height: "100px", marginLeft: "80px" }}>
                <NewsList />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "50px" }} className={classes.newsCenter}>
            <Breadcrumb items={["АНГИЛАЛ", name[0].name]} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "18px" }}></div>
              <div
                style={{
                  width: "850px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  paddingTop: "10px",
                }}
              >
                {news.map((item, i) => (
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={"/detail/" + news[i].id}
                  >
                    <CategoryNews
                      width="850px"
                      img={news[i].image}
                      title={news[i].title}
                      text={news[i].text}
                      date={news[i].date}
                      imgWidth="100%"
                      imgHeight="auto"
                    />
                  </a>
                ))}

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

                  {btn.map((btn) => (
                    <a
                      href="/"
                      key={btn}
                      id={btn}
                      onClick={this.getData.bind(this, btn, "#ffcce9")}
                    >
                      {btn}
                    </a>
                  ))}
                  <div
                    className={classes.prevButton}
                    onClick={this.getData.bind(this, this.state.pnp + 1)}
                  >
                    <MdNavigateNext size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Category;
