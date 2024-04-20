"use client";

import React from "react";
import styles from "../page.module.css";
import { Transition } from "react-transition-group";

import { useState, useEffect } from "react";

const defaultStyles = {
  transition: `300ms ease-in-out`,
  opacity: 0,
  height: 0,
};

export default function Podium(props) {
  //const [heights, setHeights] = useState([]);

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
