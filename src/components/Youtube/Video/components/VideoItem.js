import React from 'react';
import {FaYoutube} from 'react-icons/fa';

import styles from './VideoItem.module.css';

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className={styles.container}>
            <img className={styles.video} src={video.imgUrl} alt={video.description} />
            <p className={styles.subTitle}>{video.title}</p>
            <FaYoutube className={styles.icon}  style={{ position: 'absolute', fontSize: '40px' }} />
        </div>
    );
};

export default VideoItem;
