import React from "react";
import styles from "../page.module.css";
export default function Podium(props) {
  return (
    <div className={styles.podium_container}>
      {props.titles.map((title, index) => {
        return (
          <div key={index} className={styles.podium_item_container}>
            <p className={styles.podium_item_text}>{title}</p>
            <div className={styles.podium_item_fill}></div>
          </div>
        );
      })}
    </div>
  );
}
