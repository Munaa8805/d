import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import { FaPhoneSquare, FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GoCalendar } from "react-icons/go";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <div>
    <header className={classes.drawerToggler}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
    <div className={classes.toolbar}>
      <div className={classes.menuContainer}>
        <NavigationItems />
      </div>
    </div>
  </div>
);

export default toolbar;
