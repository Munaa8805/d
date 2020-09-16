import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaSoundcloud,
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
        <FaFacebookSquare />
      </IconContext.Provider>

      <IconContext.Provider value={{ size: "25px" }}>
        <FaTwitterSquare />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "25px" }}>
        <FaYoutubeSquare />
      </IconContext.Provider>
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: "75px",
          backgroundColor: "white",
          height: "21px",
          width: "21px",
          borderRadius: "10%",
        }}
      >
        <IconContext.Provider value={{ size: "19px" }}>
          <FaSoundcloud style={{ color: "#6C87B2" }} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Social;
