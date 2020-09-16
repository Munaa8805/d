import React, { Component } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
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
      <IconContext.Provider value={{ size: props.size }}>
        <FaFacebookSquare style={{ color: "#6C87B2" }} />
      </IconContext.Provider>

      <IconContext.Provider value={{ size: props.size }}>
        <FaTwitterSquare style={{ color: "#6C87B2" }} />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: props.size }}>
        <FaLinkedin style={{ color: "#6C87B2" }} />
      </IconContext.Provider>
    </div>
  );
};

export default Social;
