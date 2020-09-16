import React, { Component } from "react";
import classes from "./index.css";
import { Tabs } from "@yazanaabed/react-tabs";

class Tab extends Component {
  render() {
    var items = [];

    for (var i = 0; i <= this.props.list.id; i++) {
      items[i] = (
        <Tabs.Tab
          id={i}
          title={this.props.list.title[i]}
          title1={this.props.list.title1[i]}
        >
          {this.props.list.content[i]}
        </Tabs.Tab>
      );
    }

    return (
      <div className={classes.zero}>
        <Tabs
          activeTab={{
            id: 0,
          }}
        >
          {items}
        </Tabs>
      </div>
    );
  }
}
export default Tab;
