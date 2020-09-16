import React from "react";
import classes from "./SurveyChart.css";

const BowChart = (props) => {
  const widthPx = props.width + "px";

  let maxCount = 0;

  props.data.choices.map((st) => {
    let parsedNum = parseInt(st.count);
    maxCount = parsedNum > maxCount ? parsedNum : maxCount;
  });

  let content = props.data.choices.map((st) => {
    let num = ((parseInt(st.count) * 100) / maxCount).toFixed(1);
    const numPx = num + "%";
    num = (
      (parseInt(st.count) * 100) /
      parseInt(props.data.totalCount)
    ).toFixed(1);

    let result =
      props.status === "open" ? (
        <div className={classes.choice}>
          <input
            type="radio"
            name={props.groupId}
            value={props.groupId}
            key={props.groupId}
          />
        </div>
      ) : (
        <div className={classes.choice}>
          <input
            disabled
            type="radio"
            name={props.groupId}
            value={props.groupId}
            key={props.groupId}
          />
        </div>
      );

    return (
      <div className={classes.row} style={{ width: `${widthPx}` }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {result}
          <div className={classes.label}>{st.choice}</div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={classes.chartBorder} style={{ width: "100%" }}>
            <div className={classes.chart} style={{ width: `${numPx}` }}></div>
          </div>
          <div className={classes.number}>{num}%</div>
        </div>
      </div>
    );
  });

  return <div className={classes.container}>{content}</div>;
};

export default BowChart;
