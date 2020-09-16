import React, { Component } from "react";
import classes from "./index.css";
import { Button } from "primereact/button";
// import classes from './Editor.module.css';
import { ScrollPanel } from "primereact/scrollpanel";
import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";
import moment from "moment";
import { Growl } from "primereact/growl";

class ListNews extends Component {
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
      detail: "МАМЖИЛТАЙ УСТГАГДЛАА",
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
    fetch(`http://103.119.92.85:5000/news/delete/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if ((json.data = "success")) {
          this.showSuccess();
          window.location.reload(true);
        }
      });
  }
  handleClick1(id) {
    window.location.href = "/admin/editor/" + id;
  }

  componentDidMount() {
    fetch("http://103.119.92.85:5000/news/list")
      .then((res) => res.json())
      .then((json) => {
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
            {" "}
            <FaListUl />
          </IconContext.Provider>
          <div style={{ marginLeft: "10px", fontSize: "22px" }}>
            МЭДЭЭНИЙ ЖАГСААЛТ
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
                  <th>АНГИЛАЛ</th>
                  <th>Н/ЗУРАГ</th>
                  <th>Н/НЭР</th>
                  <th>Н/БИЧСЭН ӨДӨР</th>
                </tr>

                {news.map((item, i) => (
                  <tr>
                    <td key={i}>
                      <img
                        src={item.image_medium}
                        style={{ width: "160px", height: "90px" }}
                      />
                    </td>
                    <td key={i}>{item.title}</td> <td key={i}>{item.name}</td>
                    <td key={i}>
                      <img
                        src={item.profile_photo}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                          border: "1px solid #DDDDDD",
                        }}
                      />
                    </td>
                    <td key={i}>{item.publisher}</td>
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

export default ListNews;
