import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Exchange from "../../exchange";
import Search from "../../Search";
import Weather from "../../Weather";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import {
  FacebookShareButton,
  FacebookIcon,
  // GooglePlusShareButton,
  // GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  // TwitterShareCount,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const shareUrl = `https://www.facebook.com/%D0%94%D1%8D%D0%BB%D1%85%D0%B8%D0%B9%D0%BD-%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB-%D1%81%D0%B0%D0%B9%D1%82-1908262649471631/`;

const toolbar = (props) => (
  <div>
    <header className={classes.Toolbar}>
      <div className={classes.DrawerToggle}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </header>
    <div className={classes.background}>
      <div className={classes.menuContainer}>
        <div className={classes.menu}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <div className={classes.space}>
            <Search />
          </div>
          <div
            className={classes.space}
            style={{ marginLeft: "50px", color: "white" }}
          >
            <Weather />
          </div>
          <div style={{ width: "130px", marginLeft: "40px" }}>
            <Exchange />
          </div>
          <div
            className={classes.space}
            style={{ marginLeft: "100px", marginTop: "40px" }}
          >
            <div className={classes.Logo}>
              <div className={classes.social}>
                <ul>
                  <a
                    href={
                      "https://www.facebook.com/%D0%94%D1%8D%D0%BB%D1%85%D0%B8%D0%B9%D0%BD-%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB-%D1%81%D0%B0%D0%B9%D1%82-1908262649471631/"
                    }
                  >
                    {" "}
                    <FacebookShareButton>
                      <FacebookIcon size={28} round={true} />
                    </FacebookShareButton>
                  </a>
                  <a
                    href={
                      "https://twitter.com/Zk30hIEWMPvp1dK?fbclid=IwAR1DD4SfQI9KFbAIHQTscShHpxNz0Jn8I0PcyME6KyBFEysudOjbG1dm71c"
                    }
                  >
                    <TwitterShareButton>
                      <TwitterIcon size={28} round={true} />
                    </TwitterShareButton>
                  </a>
                  <a href={"/"}>
                    <LinkedinShareButton
                      url={shareUrl}
                      windowWidth={750}
                      windowHeight={600}
                      className="button"
                    >
                      <LinkedinIcon size={28} round={true} />
                    </LinkedinShareButton>
                  </a>
                  <a href={"/"}>
                    <PinterestShareButton
                      url={shareUrl}
                      windowWidth={750}
                      windowHeight={600}
                      className="button"
                    >
                      <PinterestIcon size={28} round={true} marginTop={15} />
                    </PinterestShareButton>
                  </a>
                </ul>
              </div>
              {/* <Social/> */}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <div className={classes.list}></div>
          <div className={classes.list1}>
            <NavigationItems />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default toolbar;
