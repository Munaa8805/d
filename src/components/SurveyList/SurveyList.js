import React from "react";
import classes from "./SurveyList.css";
import SurveyShort from "./SurveyShort/SurveyShort";

const SurveyList = (props) => {
  const getSurveyList = () => {
    let surveys = [];
    surveys = [
      {
        surveyId: "1",
        subject: "Казинотой холбоотой санал асуулга",
        image: "https://news.mn/wp-content/uploads/2020/01/News153.jpg",
        status: "closed",
        openDate: "2020.01.15",
        closeDate: "2020.01.20",
        totalCount: "35",
        linkToNews: "/survey/detail1",
        questions: [
          {
            question: "Хэн нь казино тоглосон гишүүн бэ?",
            totalCount: "35",
            choices: [
              { choice: "Д.Тогтохсүрэн", count: "13" },
              { choice: "Д.Эрдэнэбат", count: "10" },
              { choice: "Д.Лүндээжанцан", count: "5" },
              { choice: "Хэн нь ч биш", count: "7" },
            ],
          },
          {
            question: "Хэн нь казино тоглосон гишүүн бэ?",
            totalCount: "35",
            choices: [
              { choice: "Д.Тогтохсүрэн", count: "13" },
              { choice: "Д.Эрдэнэбат", count: "10" },
              { choice: "Д.Лүндээжанцан", count: "5" },
              { choice: "Хэн нь ч биш", count: "7" },
            ],
          },
        ],
      },
      {
        surveyId: "1",
        subject: "Казинотой холбоотой санал асуулга",
        image: "https://news.mn/wp-content/uploads/2020/01/News153.jpg",
        status: "open",
        openDate: "2020.01.20",
        closeDate: "2020.01.25",
        totalCount: "35",
        linkToNews: "/survey/detail2",
        questions: [
          {
            question: "Хэн нь казино тоглосон гишүүн бэ?",
            totalCount: "35",
            choices: [
              { choice: "Д.Тогтохсүрэн", count: "13" },
              { choice: "Д.Эрдэнэбат", count: "10" },
              { choice: "Д.Лүндээжанцан", count: "5" },
              { choice: "Хэн нь ч биш", count: "7" },
            ],
          },
          {
            question: "Хэн нь казино тоглосон гишүүн бэ?",
            totalCount: "35",
            choices: [
              { choice: "Д.Тогтохсүрэн", count: "13" },
              { choice: "Д.Эрдэнэбат", count: "10" },
              { choice: "Д.Лүндээжанцан", count: "5" },
              { choice: "Хэн нь ч биш", count: "7" },
            ],
          },
        ],
      },
    ];
    return surveys;
  };

  const prepareSurveyList = (surveys) => {
    let content = null;

    content = surveys.map((item, index) => (
      <div
        style={{
          padding: "15px 0px",
          margin: "0px",
          borderTop: "1px solid #e6e6e6",
        }}
      >
        <SurveyShort data={item} width={"100%"} height={"auto"} />
      </div>
    ));

    return (
      <div style={{ flex: 1 }}>
        <div>{content}</div>
      </div>
    );
  };

  let data = null;
  let surveyList = getSurveyList();
  if (surveyList !== null) {
    data = prepareSurveyList(surveyList);
  }

  return <div className={classes.container}>{data}</div>;
};

export default SurveyList;
