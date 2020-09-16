import React, { Component } from "react";
import classes from "./index.module.css";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";

import { IconContext } from "react-icons";
import {
  AiOutlineColumnHeight,
  AiOutlineColumnWidth,
  AiFillFacebook,
  AiFillYoutube,
  AiFillVideoCamera,
} from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import moment from "moment";
import { Growl } from "primereact/growl";
import { InputText } from "primereact/inputtext";
import ReactPlayer from "react-player";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      checked: false,
      width: "640px",
      height: "361px",
      link: "",
      date: new Date(),
      imgUrl: "",
      logo: [
        <AiFillVideoCamera />,
        <AiFillYoutube style={{ color: "#FF0400" }} />,
        <AiFillFacebook style={{ color: "#4266B2" }} />,
      ],
      type: 0,
    };
    this.showSuccess = this.showSuccess.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.linkChange = this.linkChange.bind(this);
  }

  componentDidMount() {
    var str = window.location.pathname;
    str = str.split("/")[3];
    if (str != "new") {
      fetch(`http://103.119.92.85:5000/news/detail/${str}`)
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json);
          this.setState({
            title: json.news.title,
            date: new Date(),
            imgUrl: json.news.image_medium,
            type: json.news.video_type,
            link: json.news.video_link,
          });
        });
    }
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
  fileHandler(e) {
    // const {url} = e.xhr
    const a = JSON.parse(e.xhr.response);
    this.setState({ imgUrl: a.url });
  }
  linkChange(e) {
    if (e.target.value.includes("youtube.com") == true) {
      this.setState({ type: 1 });
    } else if (e.target.value.includes("facebook.com") == true) {
      this.setState({ type: 2 });
    } else {
      this.setState({ type: 0 });
    }
    this.setState({ link: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    var str = window.location.pathname;
    str = str.split("/")[3];
    if (str != "new") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: this.state }),
      };

      fetch("http://103.119.92.85:5000/news/update", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          if ((json.data = "success")) {
            this.showSuccess();
            this.setState({
              title: "",
              date: new Date(),
              imgUrl: "",
              type: 0,
              link: "",
            });
          } else {
            this.showFail();
          }
        });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: this.state }),
      };
      fetch("http://103.119.92.85:5000/news/insertVideo", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          if ((json.data = "success")) {
            this.showSuccess();
            this.setState({
              title: "",
              date: new Date(),
              imgUrl: "",
              type: 0,
              link: "",
            });
          } else {
            this.showFail();
          }
        });
    }
  }

  render() {
    const { news, isLoading } = this.state;
    console.log("link", this.state.type);
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
            <MdCloudUpload />
          </IconContext.Provider>
          <div style={{ marginLeft: "10px", fontSize: "22px" }}>
            Видео оруулах
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <span className="p-float-label" style={{ marginBottom: "30px" }}>
            <InputText
              id="float-input"
              type="text"
              size="30"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <label htmlFor="float-input">ГАРЧИГ</label>
          </span>

          <div style={{ marginTop: "20px", fontSize: "22px" }}>
            Нүүрэн дээрх харагдац
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              marginTop: "20px",
            }}
          >
            <IconContext.Provider
              style={{ border: "1px solid lightGray" }}
              value={{ size: "28px" }}
            >
              {this.state.logo[this.state.type]}
            </IconContext.Provider>
            <span className="p-float-label" style={{ marginLeft: "10px" }}>
              <InputText
                id="float-input"
                type="text"
                size="30"
                value={this.state.link}
                onChange={this.linkChange}
              />
              <label htmlFor="float-input">Линкээ энд оруулно уу ?</label>
            </span>
          </div>
          <div
            style={{
              marginTop: "50px",
              position: "relative",
              width: "750px",
              height: "361px",
            }}
          >
            <ReactPlayer
              style={{ border: "1px solid lightGray", overflow: "hidden" }}
              width="640px"
              height="361px"
              url={this.state.link}
              playing
            />

            <div
              style={{
                top: "-30px",
                fontSize: "22px",
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              640px
              <IconContext.Provider value={{ size: "28px" }}>
                <AiOutlineColumnWidth />
              </IconContext.Provider>
            </div>
            <div
              style={{
                top: "175px",
                right: "20px",
                fontSize: "22px",
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconContext.Provider value={{ size: "28px" }}>
                <AiOutlineColumnHeight />
              </IconContext.Provider>
              361px
            </div>
          </div>
          <div style={{ marginTop: "20px", fontSize: "22px" }}>
            Нүүрэн дээрх зурагны харагдац
          </div>
          <div
            className="p-fileupload"
            style={{ display: "flex", marginTop: "30px", alignItems: "center" }}
          >
            <div className={classes.file}>
              <FileUpload
                name="demo[]"
                url="http://103.119.92.85:5000/single"
                onUpload={this.fileHandler}
                multiple={false}
                accept="image/*"
                maxFileSize={1000000}
                chooseLabel="НҮҮРНИЙ ЗУРАГ"
              />
            </div>
            {/* {(file) => this.setState({ imgUrl: file.files[0].objectURL })} */}
          </div>
          <div
            style={{ display: "flex", marginTop: "30px", alignItems: "center" }}
          >
            <div style={{ paddingRight: "10px", fontSize: "16px" }}>
              НИЙТЛЭХ ОГНОО
            </div>
            <Calendar
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.value })}
              showTime={true}
              showSeconds={true}
            />
          </div>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Growl ref={(el) => (this.growl = el)}></Growl>
            <Button
              onSubmit={this.handleSubmit}
              icon="pi pi-save"
              iconPos="left"
              label="ХАДГАЛАХ"
              className=" p-button-raised p-button-rounded p-button-info"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Video;
