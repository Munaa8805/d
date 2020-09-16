import React, { Component } from "react";
import weatherLogo from "../../assets/images/celsius-scale_icon.svg";
import axios from "axios";
import classes from "./index.module.css";
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      icon: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/find?q=Ulaanbaatar&units=metric&appid=2fd83d4206907e7692d5d6daa3ba290e"
      )
      .then((res) => {
        const data = res.data;
        this.setState({
          temp: data.list[0].main.temp,
          icon: data.list[0].weather[0].icon,
        });
      });
  }

  render() {
    return (
      <div
        style={{
          color: "white",
          fontFamily: "Roboto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          alt="alt"
          style={{ display: "block", width: "50px" }}
          src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
        />
        <div style={{ display: "block", fontSize: "18px" }}>
          {this.state.temp}
        </div>
        <div className={classes.Weather}>
          <img src={weatherLogo} alt="weather" />
        </div>
      </div>
    );
  }
}

export default Weather;
