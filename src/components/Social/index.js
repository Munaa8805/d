import React from "react";
// import classes from './index.module.css'
import {
  FaFacebookSquare,
  // FaTwitterSquare,
  // FaYoutubeSquare,
  // FaSoundcloud
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Social = (props) => {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        alignContent: "center",
        position: "relative",
      }}
    >
      <IconContext.Provider value={{ size: "25px" }}>
        <FaFacebookSquare style={{ color: "white" }} />
      </IconContext.Provider>
    </div>
  );
};

export default Social;
