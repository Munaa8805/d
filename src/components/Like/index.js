import React from "react";
import classes from "./index.css";
import Love from "./img/love.png";
import Wow from "./img/wow.png";
import Sad from "./img/sad.png";
import Poop from "./img/poop.png";
import Kiss from "./img/kiss.png";
import Heart from "./img/heart.png";
import Haha from "./img/haha.png";
import Angry from "./img/angry.png";
const Like = (props) => (
  <div style={{ textAlign: "center", width: props.width }}>
    <div
      style={{
        fontFamily: "Roboto Condensed",
        fontSize: "16px",
        marginTop: "30px",
        marginBottom: "20px",
      }}
    >
      ЭНЭ МЭДЭЭНД ӨГӨХ ТАНЫ СЭТГЭГДЭЛ?
    </div>
    <div className={classes.container}>
      <img src={Love} style={{ width: "30px", height: "30px" }} />
      <img src={Wow} style={{ width: "30px", height: "30px" }} />
      <img src={Sad} style={{ width: "30px", height: "30px" }} />
      <img src={Poop} style={{ width: "30px", height: "30px" }} />
      <img src={Kiss} style={{ width: "30px", height: "30px" }} />
      <img src={Heart} style={{ width: "30px", height: "30px" }} />
      <img src={Haha} style={{ width: "30px", height: "30px" }} />
      <img src={Angry} style={{ width: "30px", height: "30px" }} />
    </div>
  </div>
);

export default Like;
