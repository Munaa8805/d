import React from "react";
import { IoMdTime } from "react-icons/io";

const Date = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: props.size,
      }}
    >
      <IoMdTime size={props.size} />
      &nbsp;2020-01-13
    </div>
  );
};

export default Date;
