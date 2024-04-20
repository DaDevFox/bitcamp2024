"use client";

import styles from "../page.module.css";

import Podium from "./podium";
import { useEffect, useState } from "react";

export default function Home(props) {
  var titles = ["Easton", "Denton", "Elicott", "Hello"];

  
  


  
  return (
    <main className={styles.main}>
      

  <Podium points_normalized={[1, 1, 1, 1]} titles={titles} />
  </main>
  );
}
