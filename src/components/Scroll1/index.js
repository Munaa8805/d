import React from "react";
import Loader from "react-loader-spinner";

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "left",
            overflow: "scroll",
            height: `${this.props.height}`,
            width: "100%",
            color: "black",
          }}
        >
          {this.props.item}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
export default Scroll;
