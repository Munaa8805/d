import React from "react";
import classes from "./SurveySpecial.css";
import { IoMdTime } from "react-icons/io";
import Date1 from "../../Date1/index";

const SurveySpecial = (props) => {
  const getSpecialSurvey = () => {
    let survey = null;
    survey = {
      surveyId: "1",
      subject: "Казинотой холбоотой санал асуулга",
      image: "https://news.mn/wp-content/uploads/2020/01/News153.jpg",
      status: "closed",
      openDate: "2020.01.15",
      closeDate: "2020.01.20",
      linkToNews: "https://ikon.mn/ca/177",
      questions: [
        {
          question:
            "Хэн нь казино тоглосон гишүүн бэ? Хэн нь казино тоглосон гишүүн бэ? Хэн нь казино тоглосон гишүүн бэ?",
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
    };

    return survey;
  };

  const buildSpecialSurvey = (survey) => {
    let content = survey.questions.map((question, index) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <div>{index + 1}:&nbsp;</div>
        <div>{question.question}</div>
      </div>
    ));

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "15px 0px",
          borderTop: "1px solid #e6e6e6",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <img
          style={{
            margin: "0",
            width: "45%",
            height: "auto",
            borderRadius: "8px",
          }}
          src={survey.image}
        />
        <div
          style={{
            height: "100%",
            paddingLeft: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingRight: "10px",
          }}
        >
          <div
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "24px",
              height: "30px",
              marginBottom: "10px",
            }}
          >
            {survey.subject}
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Date1 size={12} />
          </div>
          <div>{content}</div>
          <div style={{ height: "20px", textAlign: "right" }}>Дэлгэрэнгүй</div>
        </div>
      </div>
    );
  };

  let specialContent = null;
  let specialSurvey = getSpecialSurvey();
  if (specialSurvey !== null) {
    specialContent = buildSpecialSurvey(specialSurvey);
  }

  return <div className={classes.container}>{specialContent}</div>;
};

export default SurveySpecial;
