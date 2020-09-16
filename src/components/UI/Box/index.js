import React from "react";
import renderHTML from "react-render-html";
import classes from "./index.module.css";

import NewsList from "../../../components/NewsList/NewsList";

import moment from "moment";
import Author from "../../../components/Author/Author";
import { MdAccessTime } from "react-icons/md";
import "react-sharingbuttons/dist/main.css";

import {
  FacebookShareButton,
  FacebookIcon,
  // GooglePlusShareButton,
  // GooglePlusIcon,
  // LinkedinShareButton,
  // LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  // TwitterShareCount,
} from "react-share";

const Box = (props) => {
  var a = props.text;

  const shareUrl = `www.delhii.mn/${props.shareUrl}`;
  const title = props.shareTitle;

  return (
    <div className={classes}>
      <div style={{ margin: "0", marginTop: "10px", padding: "0" }}>
        <hr
          style={{
            height: "2px",
            border: "none",
            color: "#ffffff",
            backgroundColor: "#ffffff",
            width: "90%",
          }}
        />

        <div className={classes.grid1}>
          <div>
            <div style={{ marginLeft: "375px" }}>
              <div style={{ marginLeft: "-330px" }}>
                <div
                  style={{
                    border: "1px solid grey",
                    height: "200px",
                    width: "200px",
                    marginLeft: "90px",
                    color: "white",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    alt=""
                    src={require(`../../../components/assets/banner1.gif`)}
                  />
                </div>

                <div style={{ height: "100px", marginLeft: "80px" }}>
                  <NewsList />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.title}>{props.title}</div>
            <br />
            <div className={classes.categoryName1}>
              <MdAccessTime size="15px" /> {moment(props.date).format("L")}
            </div>
            <br />
            <div
              className={classes.author}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            >
              <Author
                style={{ marginTop: "50px" }}
                authorName={"Admin"}
                authorImage={
                  "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                }
                category={[props.category]}
              />

              <div className={classes.share}>
                <ul>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="m-2"
                  >
                    <FacebookIcon
                      size={58}
                      round={false}
                      borderRadius={15}
                      text="share"
                    />
                  </FacebookShareButton>
                </ul>
                <ul
                  className={classes.twitter}
                  style={{ marginLeft: "80px", marginTop: "-62px" }}
                >
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="button"
                  >
                    <TwitterIcon size={58} borderRadius={15} round={false} />
                  </TwitterShareButton>
                </ul>
              </div>
            </div>
            <br />
            <div className={classes.main} style={{ margin: "0", padding: "0" }}>
              <div className={classes.rimg}>
                <img
                  className={classes.img}
                  style={{ width: "100%", height: "auto" }}
                  src={props.img}
                  alt={props.title}
                />
              </div>
              <br />
              <br />
              <br />
              <br />

              <div className={classes.text}>{renderHTML(a)}</div>

              <div className={classes.video}>{props.video}</div>

              <br />
              <br />

              <div style={{ float: "right" }}>
                <ul>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="m-2"
                  >
                    <FacebookIcon
                      size={58}
                      round={false}
                      borderRadius={15}
                      text="share"
                    />
                  </FacebookShareButton>
                </ul>
                <ul style={{ marginLeft: "80px", marginTop: "-62px" }}>
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="button"
                  >
                    <TwitterIcon size={58} borderRadius={15} round={false} />
                  </TwitterShareButton>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
