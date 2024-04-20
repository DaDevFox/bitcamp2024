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

  const [showPodiums, setShowPodiums] = useState(false);

  const masterTransitionStyles = [];

  for (var i = 0; i < props.titles.length; i++) {
    masterTransitionStyles[i] = {
      entering: { height: props.points_normalized[i], opacity: 1 },
      entered: { height: props.points_normalized[i], opacity: 1 },
      exiting: { height: 0.1, opacity: 0 },
      exited: { height: 0.1, opacity: 0 },
    };
  }

  useEffect(() => {
    setShowPodiums(!showPodiums);
  }, []);

  return (
    <div className={styles.podium_container}>
      {props.titles.map((title, index) => {
        return (
          <Transition key={index} in={showPodiums} timeout={300}>
            {(state) => (
              <div className={styles.podium_item_container}>
                <p className={styles.podium_item_text}>{title}</p>
                <div
                  style={{
                    ...defaultStyles,
                    ...masterTransitionStyles[index][state],
                  }}
                  className={styles.podium_item_fill}
                ></div>
              </div>
            )}
          </Transition>
        );
      })}
    </div>
  );
}
