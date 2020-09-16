import React, { Component } from "react";
import classes from "./index.css";
import ReactPlayer from "react-player";

class Video extends Component {
  handleToggleAllowPlaying(e) {
    this.setState((prevState) => ({ allowPlaying: !prevState.allowPlaying }));
    const vimeoPlayer = this.player.getInternalPlayer();
    if (vimeoPlayer) {
      if (this.state.allowPlaying) {
        vimeoPlayer.pause();
      } else {
        vimeoPlayer.play();
      }
    }
  }
  render() {
    return (
      <div className={classes.video}>
        <ReactPlayer
          ref={(player) => {
            this.player = player;
          }}
          url={this.props.url}
          width={this.props.width}
          height="auto"
          pause
          controls
        />
      </div>
    );
  }
}

export default Video;
