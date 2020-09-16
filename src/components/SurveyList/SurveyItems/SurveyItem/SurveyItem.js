import React from "react";
import classes from "./SurveyItem.css";

const SurveyItem = (props) => {
  const isOpen = props.data.status === "open" ? true : false;

  const buildOneQuestion = (oneQuestionData, questionNo) => {
    let content = oneQuestionData.choices.map((answer, index) => {
      let result = isOpen ? (
        <div>
          <input type="radio" name={questionNo} value={index} key={index} />{" "}
          <span>{answer.choice}</span>&nbsp;
          <span>
            <strong>{answer.count}</strong>
          </span>
        </div>
      ) : (
        <div>
          <input
            disabled
            type="radio"
            name={questionNo}
            value={index}
            key={index}
          />{" "}
          <span>{answer.choice}</span>&nbsp;
          <span>
            <strong>{answer.count}</strong>
          </span>
        </div>
      );
      return result;
    });

    return (
      <div>
        <div>
          <h4>
            {questionNo}. {oneQuestionData.question}{" "}
            <strong>(Нийт санал: {oneQuestionData.totalCount})</strong>
          </h4>
        </div>
        <div style={{ borderTop: "1px solid #e6e6e6", width: "100%" }}></div>
        {content}
      </div>
    );
  };

  const buildOneSurvey = (surveyItem) => {
    let content = surveyItem.questions.map((question, index) =>
      buildOneQuestion(question, index + 1)
    );

    return (
      <div>
        <div style={{ width: "100%" }}>
          <h3>Сэдэв : {surveyItem.subject}</h3>
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "600px", height: "auto" }}
            src={surveyItem.image}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span style={{ width: "50%" }}>
            {surveyItem.status === "open"
              ? "Санал асуулга хаагдах огноо: " + surveyItem.closeDate
              : "Санал асуулга хаагдсан байна"}
          </span>
          {surveyItem.linkToNews ? (
            <a href={surveyItem.linkToNews}>Холбоотой мэдээ үзэх</a>
          ) : null}
        </div>
        <div style={{ width: "100%" }}>
          <form>
            {content}
            <br />
            {isOpen ? (
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
  };

  let data = buildOneSurvey(props.data);

  return <div className={classes.container}>{data}</div>;
};

export default SurveyItem;
