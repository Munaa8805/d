import React from "react";
import classes from "./index.css";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";

const Share = (props) => (
  <div
    style={{
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      height: "30px",
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
        fontSize: "16px",
      }}
    >
      <div style={{ color: "#6C87B2", fontSize: "16px" }}></div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        backgroundColor: "#3E5BA9",
        height: "30px",
        fontSize: "15px",
        fontFamily: "Roboto Condensed",
        color: "white",
      }}
    >
      <TiSocialFacebook size={30} color="white" />
      &nbsp;ХУВААЛЦАХ
    </div>
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        backgroundColor: "#0090FF",
        height: "30px",
        fontSize: "15px",
        fontFamily: "Roboto Condensed",
        color: "white",
      }}
    >
      <IoLogoTwitter size={30} color="white" />
      &nbsp;ЖИРГЭХ
    </div>
  </div>
);

export default Share;
