import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./index.module.css";
import Layout from "../../hoc/Layout/Layout";
import Box from "../../components/UI/Box";
import Footer from "../../components/Footer";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      isLoaded: false,
      isLoading: false,
      banner: "",
      html: "",
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params)
    const { id } = this.props.match.params;
    console.log(id);
    fetch(`http://103.119.92.97:3050/news/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("A1", json);
        this.setState({
          isLoaded: true,
          news: json.data,
          html: json.data.html,

          link: "http://103.119.92.97:3000/detail/" + id + "",
        });
      });
  }
  render() {
    var { isLoaded, news, link, html } = this.state;

    if (!isLoaded) {
      return <Spinner />;
    } else {
      if (news.news[0]) {
        var regexAllTags = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/gim;
        var imageArray = [];
        var htmlTags = news.news[0].text.split(regexAllTags);
        for (var i = 0; i < htmlTags.length; i++) {
          if (htmlTags[i].match(/103.*/)) {
            imageArray.push(htmlTags[i]);
          }
        }
        return (
          <Layout>
            <div>
              <div>
                <div style={{ margin: "0", padding: "0" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      html={html}
                      img={news.news[0].image}
                      date={news.news[0].date}
                      title={news.news[0].title}
                      text={news.news[0].text}
                      video={news.news[0].video}
                      category={news.news[0].categoryname}
                      shareUrl={this.props.match.url}
                      shareTitle={news.news[0].title}
                    />
                  </div>
                  <br />
                  <label>
                    <h4 className={classes.commenttext}>Сэтгэгдэл</h4>
                  </label>

                  <div className={classes.fbcomment}>
                    <div
                      className="fb-comments"
                      data-href={link}
                      data-width="400px"
                      data-numposts="6"
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Footer />
              </div>
            </div>
          </Layout>
        );
      }
    }
  }
}

export default Detail;
