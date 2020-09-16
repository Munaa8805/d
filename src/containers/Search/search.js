import React, { Component } from "react";

import Spinner from "../../components/UI/Spinner/Spinner";
import Box from "../../components/Body/box1";

import Layout from "../../hoc/Layout/Layout";
import classes from "./index.css";
import moment from "moment";

import "moment/locale/mn";
import Footer from "../../components/Footer";

import { GoCalendar } from "react-icons/go";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      name: "",
      page: "",
      search: [],
      isLoaded: false,
      isLoading: false,
      banner: "",
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://103.119.92.97:3050/news/search/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.search[0]);
        this.setState({
          search: json.search,
          isLoaded: true,
        });
      })
      .then(function (response) {
        console.log("response:", response);
      })
      .catch(function (error) {});
  }

  render() {
    var { isLoaded, search } = this.state;

    if (isLoaded === false) {
      return <Spinner />;
    } else {
      var a = null;

      if (search.length === 0) {
        a = (
          <center>
            <h1 style={{ height: "200px" }}>Илэрц олдсонгүй</h1>
          </center>
        );
      }

      a = (
        <ul>
          {search.map((search) => (
            <li key={search.id} style={{ listStyle: "none" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "450px",
                  marginTop: "100px",
                  flexDirection: "column",
                }}
              >
                <a href={"/detail/" + search.id}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                  >
                    <div
                      className={classes.image}
                      style={{ textDecoration: "none", marginLeft: "600px" }}
                    >
                      <Box
                        title={search.title}
                        img={`http://www.delhii.mn/${search.image}-large.jpg`}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        textDecoration: "none",
                        width: "280px",
                        color: "black",
                        fontWeight: "200",
                      }}
                      className={classes.title1}
                    >
                      <h4>{search.title}</h4>
                      <div
                        style={{
                          marginLeft: "30px",
                          fontFamily: "arial",
                          marginTop: "10px",
                        }}
                      >
                        {search.categoryname}
                      </div>
                      {search.category}
                      <div
                        style={{
                          fontSize: "14px",
                          color: "gray",
                          marginTop: "30px",
                          marginLeft: "-170px",
                        }}
                      >
                        <GoCalendar size="13px" />{" "}
                        {moment(
                          moment(search.date)
                            .utc()
                            .format("YYYY-MM-DD")
                            .toString()
                        ).toNow(true)}{" "}
                        өмнө
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
          ;
          <div style={{ paddingRight: "300px" }}>
            <Footer />
          </div>
        </ul>
      );

      return (
        <Layout>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "20px",
                marginLeft: "300px",
                marginTop: "40px",
              }}
            >
              Хайлтын илэрц:
            </h1>

            <br />
            {a}
          </div>
        </Layout>
      );
    }
  }
}

export default Search;
