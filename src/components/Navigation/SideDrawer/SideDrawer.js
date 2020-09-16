import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        style={{ backgroundColor: "#0054a5" }}
        className={attachedClasses.join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav style={{ marginTop: "-25px" }} className="nu">
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;