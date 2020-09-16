import React from "react";
import classes from "./SurveyItem.css";

const SurveyItem = (props) => {
  const items = props.items;
  const lastIndex = items.length - 1;
  let contents = null;

  contents = items.map((item, index) => {
    if (index < lastIndex) {
      return <span>{item} &nbsp; </span>;
    } else {
      return <span>{item}</span>;
    }
  });

  return (
    <div className={classes.container}>
      {contents}
      <button>САНАЛ ӨГӨХ</button>
    </div>
  );
};

export default SurveyItem;
