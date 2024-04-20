import React from "react";
import styles from "../page.module.css";

export default function Podium({
  base_height,
  decrease_per_height,
  ...titles
}) {
  var podiums;
  var podium_count = 3;

  for (var i = 0; i < podium_count; i++) {
    podiums += (
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>{titles[i]}</p>
        <div className={styles.podium_item_fill}></div>
      </div>
    );
  }

  return (
    <div className={styles.podium_container}>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>{props.title1 ?? 1}</p>
        <div className={styles.podium_item_fill}></div>
      </div>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>{props.title2 ?? 2}</p>
        <div className={styles.podium_item_fill}></div>
      </div>
      <div className={styles.podium_item_container}>
        <p className={styles.podium_item_text}>{props.title3 ?? 3}</p>
        <div className={styles.podium_item_fill}></div>
      </div>
    </div>
  );
}
