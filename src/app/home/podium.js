"use client";

import React from "react";
import styles from "../page.module.css";
import { Transition } from "react-transition-group";

import { useState, useEffect } from "react";

const defaultStyles = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Podium(props) {
  //const [heights, setHeights] = useState([]);

  const [showPodiums, setShowPodiums] = useState(false);

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
                    ...transitionStyles[state],
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
