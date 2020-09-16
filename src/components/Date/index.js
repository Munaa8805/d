import React from "react";
import { IoMdTime } from "react-icons/io";
import moment from "moment";

const Date = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "gray",
        fontSize: props.size,
        justifyContent: "flex-start",
        fontFamily: "Roboto",
        alignContent: "flex-start",
      }}
    >
      <div
        style={{ fontFamily: "Roboto", color: "#FF9900", fontSize: props.size }}
      >
        {props.category}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", fontSize: props.size }}
      >
        <IoMdTime size={props.size} />
        &nbsp;{moment(props.date, "YYYY-MM-DD").format("YYYY-MM-DD")}
      </div>
    </div>
  );
};

export default Date;
