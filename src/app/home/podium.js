import React from "react";
import styles from "../page.module.css";

export default function Podium(props) {
  return (
    <div className={styles.podium_container}>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>1</p>
        <div className={styles.podium_item_fill}></div>
      </div>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>2</p>
        <div className={styles.podium_item_fill}></div>
      </div>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>3</p>
        <div className={styles.podium_item_fill}></div>
      </div>
    </div>
  );
}
