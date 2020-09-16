import React from "react";

const Scroll = (props) => (
  <div>
    <div
      style={{
        textAlign: "left",
        overflow: "scroll",
        height: `${props.height}`,
        width: "100%",
        color: "black",
      }}
    >
      {props.item}
    </div>
  </div>
);
export default Scroll;
