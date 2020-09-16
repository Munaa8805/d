import React from "react";
import classes from "./SurveyShort.css";
import Date1 from "../../Date1/index";

const SurveyShort = (props) => {
  let content = props.data.questions.map((question, index) => (
    <div>
      {index + 1}: {question.question}
    </div>
  ));

  return (
    <div
      style={{
        margin: "0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: `${props.width}`,
        height: `${props.height}`,
      }}
    >
      <img
        style={{ width: "25%", height: "auto", borderRadius: "5px" }}
        src={props.data.image}
      />
      <div
        style={{
          margin: "0",
          paddingLeft: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontFamily: "Roboto Condensed", fontSize: "20px" }}>
          {props.data.subject}
        </div>
        <div
          style={{
            textAlign: "left !important",
            paddingRight: "10px",
            marginBottom: "5px",
          }}
        >
          <Date1 size={12} />
        </div>
        <div style={{ width: "100%", margin: "0" }}>{content}</div>
        <div style={{ textAlign: "right", paddingRight: "20px" }}>
          <a style={{ textDecoration: "none" }} href={props.data.linkToNews}>
            дэлгэрэнгүй
          </a>
        </div>
      </div>
    </div>
  );
};

export default SurveyShort;
