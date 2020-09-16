import React, { Component } from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class navigationItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      isLoaded: false,
    };
  }

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
    }

    return (
      <ul className={classes.NavigationItems}>
        <div>
          <NavigationItem link="/" exact>
            <div className={classes.title}>НҮҮР</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/1">
            <div className={classes.title}>УЛС ТӨР</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/2">
            <div className={classes.title}>НИЙГЭМ</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/3">
            <div className={classes.title}>УТГА ЗОХИОЛ</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/4">
            <div className={classes.title}>ЯРИЛЦЛАГА</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/5">
            <div className={classes.title}>ДЭЛХИЙД</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/6">
            <div className={classes.title}>УРЛАГ</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/list/7">
            <div className={classes.title}>СПОРТ</div>
          </NavigationItem>
        </div>
        <div className={classes.borders}>
          <NavigationItem link="/contact">
            <div className={classes.title}>ХОЛБОО БАРИХ</div>
          </NavigationItem>
        </div>
      </ul>
    );
  }
}

export default navigationItems;
