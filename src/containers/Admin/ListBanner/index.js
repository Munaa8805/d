import React, { Component } from "react";
import classes from "./index.css";
import { Button } from "primereact/button";
import axios from "axios";
import { ScrollPanel } from "primereact/scrollpanel";
import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";
import moment from "moment";
import { Growl } from "primereact/growl";

class ListBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: false,
    };
    this.showSuccess = this.showSuccess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  showSuccess() {
    this.growl.show({
      severity: "success",
      summary: "УСТГАГДЛАА",
      detail: "АМЖИЛТАЙ УСТГАГДЛАА",
    });
  }
  showFail() {
    this.growl.show({
      severity: "Error",
      summary: "Алдаа гарлаа дахин оролдон уу ? ",
      detail: " АЛДАА ГАРЛАА",
    });
  }

  handleClick(id) {
    axios
      .get(`http://103.119.92.85:5000/news/bannerDelete/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick1(id) {
    window.location.href = "/admin/banner/" + id;
  }

  componentDidMount() {
    fetch("http://103.119.92.85:5000/news/banner")
      .then((res) => res.json())
      .then((json) => {
        console.log("banner", json);
        this.setState({
          news: json,
          isLoading: true,
        });
      });
  }
  render() {
    const { news, isLoading } = this.state;
    if (isLoading == false) {
      return ",,,";
    }

    return (
      <div className="App" style={{ width: "100%" }}>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ size: "28px" }}>
            <FaListUl />
          </IconContext.Provider>
          <div style={{ marginLeft: "10px", fontSize: "22px" }}>
            БАННЕРЫН ЖАГСААЛТ
          </div>
        </div>
        <div style={{ position: "relative", marginTop: "10px" }}>
          <div
            style={{
              padding: "15px",
              width: "100%",
              height: "800px",
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
              boxShadow: "1px 1px 1px 1px #888888",
            }}
          >
            <ScrollPanel style={{ width: "100%", height: "780px" }}>
              <table style={{ width: "100%" }}>
                <tr>
                  <th style={{ paddingLeft: "25px" }}>ЗУРАГ</th>
                  <th>ГАРЧИГ</th>
                  <th>ХЭМЖЭЭ</th>
                  <th>БАЙРШИЛ</th>
                  <th>ХУГЦАА</th>
                </tr>

                {news.map((item, i) => (
                  <tr key={i}>
                    <td key={i}>
                      <img
                        src={item.image}
                        style={{ width: "160px", height: "90px" }}
                      />
                    </td>
                    <td key={i}>{item.name}</td>
                    <td key={i}>
                      {item.height}X{item.width}
                    </td>
                    <td key={i}>{item.location}</td>
                    <td key={i}>
                      {moment(item.created_at, "YYYY-MM-DD").format(
                        "YYYY-MM-DD"
                      )}
                    </td>
                    <td>
                      <Growl ref={(el) => (this.growl = el)}></Growl>
                      <Button
                        label="ЗАСАХ"
                        className="p-button-rounded"
                        onClick={this.handleClick1.bind(this, item.id)}
                      />
                    </td>
                    <td>
                      <Button
                        label="УСТГАХ"
                        className="p-button-danger p-button-rounded"
                        onClick={this.handleClick.bind(this, item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </ScrollPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBanner;
