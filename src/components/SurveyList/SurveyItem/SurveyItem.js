import React from "react";
import classes from "./SurveyItem.css";
import SurveyChart from "../SurveyChart/SurveyChart";

const SurveyItem = (props) => {
  const buildOneQuestion = (oneQuestionData, questionNo) => {
    return (
      <div
        style={{
          borderTop: "1px solid #e6e6e6",
          width: "100%",
          padding: "10px 0px",
        }}
      >
        <div style={{ paddingBottom: "5px" }}>
          <strong>
            {questionNo}. {oneQuestionData.question} (Нийт санал:
            {oneQuestionData.totalCount})
          </strong>
        </div>
        <SurveyChart
          data={oneQuestionData}
          width={950}
          groupId={questionNo}
          status={props.data.status}
        />
      </div>
    );
  };

  const surveyHeader = (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
      }}
    >
      <img
        style={{
          borderRadius: "5px",
          margin: "0",
          width: "30%",
          height: "auto",
        }}
        src={props.data.image}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "70%",
          paddingLeft: "50px",
        }}
      >
        <div
          className={classes.caption}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          {props.data.subject}
        </div>
        <div style={{ color: "red" }}>
          {props.data.status === "open"
            ? "Санал асуулга нээлттэй байна"
            : "Санал асуулга хаагдсан байна"}
        </div>
        <div>Нийт санал: {props.data.totalCount}</div>
        <div>
          Санал асуулгын хугацаа: {props.data.openDate} - {props.data.closeDate}
        </div>
        {props.data.linkToNews ? (
          <div>
            <a href={props.data.linkToNews}>Холбоотой мэдээ үзэх</a>
          </div>
        ) : null}
      </div>
    </div>
  );

  let content = props.data.questions.map((question, index) =>
    buildOneQuestion(question, index + 1)
  );
  const surveyContent = (
    <div style={{ borderTop: "1px solid #e6e6e6", padding: "10px 0px" }}>
      {surveyHeader}
      <div
        style={{
          width: "100%",
          paddingBottom: "10px",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <form>
          {content}
          {props.data.status === "open" ? (
            <input
              type="button"
              value="САНАЛ ӨГӨХ"
              style={{
                color: "white",
                padding: "2px 15px",
                border: "2px solid #e6e6e6",
                backgroundColor: "#6C87B2",
              }}
            />
          ) : null}
        </form>
      </div>
    </div>
  );

  return <div className={classes.container}>{surveyContent}</div>;
};

export default SurveyItem;
