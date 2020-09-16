import React from "react";

const Calendar = (props) => (
  <div
    style={{
      border: "1px solid #e6e6e6",
      height: `${props.height}`,
      width: `${props.width}`,
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        borderBottom: "2px dotted #6C87B2",
        backgroundColor: props.color,
        width: "100%",
        height: "30%",
        fontSize: "14px",
        color: "white",
      }}
    >
      <strong>
        {props.valueYear}-{props.valueMonth}
      </strong>
    </div>
    <div
      style={{
        fontSize: "20px",
        color: props.color,
        height: "40%",
        paddingTop: "5px",
        paddingBottom: "5px",
        position: "relative",
      }}
    >
      <strong>{props.valueDay}</strong>
    </div>
    <div style={{ fontSize: "16px", height: "25%" }}>{props.valueTime}</div>

    <div
      style={{
        borderTop: "1px solid #e6e6e6",
        borderBottom: "1px solid #e6e6e6",
        height: "5%",
        width: "98%",
        margin: "auto",
      }}
    ></div>
  </div>
);
export default Calendar;
