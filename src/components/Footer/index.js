import React from "react";
// import { Row, Col } from 'reactstrap';
// import Logo from '../Logo/Logo';
import classes from "./index.module.css";
import { GoLocation } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

import {
  FacebookShareButton,
  FacebookIcon,
  // GooglePlusShareButton,
  // GooglePlusIcon,
  // LinkedinShareButton,
  // LinkedinIcon,
  // TwitterShareButton,
  // TwitterIcon,
  // TwitterShareCount,
} from "react-share";

const shareUrl = `localhost${window.location.pathname}`;

// const url = 'www.smartmongolia.mn'
// const shareText = 'Check this site!'

const Footer = (props) => (
  <div className={classes.rowblock}>
    <div className={classes.con}>
      <div className={classes.background}>
        <div style={{ flex: "1" }}>
          <ul style={{ marginLeft: "210px", marginTop: "50px" }}>
            <li>
              <div
                style={{
                  fontFamily: "Roboto Slab,Times New Roman,serif",
                  fontSize: "15px",
                  marginBottom: "40px",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Delhii.mn
              </div>
            </li>
            <div
              className={classes.address}
              style={{
                marginTop: "-15px",
                color: "rgb(123, 123, 123)",
                textAlign: "left",
                fontSize: "15px",
                fontFamily: "Roboto Slab,Times New Roman,serif",
                fontWeight: "300",
                lineHeight: "1.5em",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoLocation size={20} style={{ color: "yellow" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#7B7B7B" }}>
                  Улаанбаатар хот, чингэлтэй дүүрэг, 6-р хороо, Сүхбаатарын
                  гудамж-12
                  <br />
                  "Монголын зохиолчдын эвлэл"-ийн төв байр 303 тоот{" "}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <TiContacts size={20} style={{ color: "yellow" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#7B7B7B" }}>
                  99650208
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <MdMailOutline size={20} style={{ color: "yellow" }} />
                &nbsp; &nbsp;
                <div style={{ fontSize: "15px", color: "#7B7B7B" }}>
                  info@delhii.mn
                </div>
              </div>
            </div>
            <hr
              style={{
                marginTop: "20px",
                marginBottom: "0px",
                marginRight: "200px",
              }}
            />
            {/* <div className={classes.social}>
              <ul>
                <FacebookShareButton url={shareUrl} className="m-2">
                  <FacebookIcon size={25} round={true} />
                </FacebookShareButton>
              </ul>
            </div> */}
            <div className={classes.company}>
              <ul>
                <p
                  style={{
                    fontFamily: "Roboto Slab,Times New Roman,serif",
                    fontSize: "15px",
                    float: "right",
                    marginBottom: "30px",
                    marginRight: "210px",
                  }}
                >
                  Powered by BowLLC
                </p>
              </ul>
            </div>
          </ul>
        </div>
        <div style={{ flex: "1" }}></div>
        <div style={{ flex: "1" }}></div>
      </div>
    </div>
  </div>
);

export default Footer;
