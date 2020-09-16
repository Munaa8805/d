import React from "react";
import VideoItem from "./VideoItem";

import styles from "./VideoList.module.css";

const VideoList = ({ videos, handleVideoSelect }) => {
  let renderedVideos = null;

  if (videos !== []) {
    renderedVideos = videos.map((video) => {
      return (
        <VideoItem
          key={video.id}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      );
    });
  }

  return <div className={styles.container}>{renderedVideos}</div>;
};

export default VideoList;
