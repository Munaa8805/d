import React from "react";
import styles from "./Zohiogch.module.css";

const ZohiogchBulan = (props) => (
  <div className={styles.container}>
    <img className={styles.blogImg} src={props.blogImg} />
    <img class={styles.avatar} src={props.writerImg} />
    <span class={styles.name}>{props.writerName}</span>
    <p class={styles.title}>{props.blogTitle}</p>
  </div>
);

export default ZohiogchBulan;
