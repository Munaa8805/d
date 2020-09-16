import React from "react";

import styles from "./VideoDetail.module.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className={styles.container}>
      <iframe
        title={video.title}
        width="100%"
        height="auto"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer;
                    autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoDetail;
