"use client";

import styles from "../page.module.css";

import Podium from "./podium";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

export default function Home(props) {
  var titles = ["Easton", "Denton", "Elicott", "Hello"];

  const [scanResult, setScanResult] = useState(null);
  
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250, // height and width of the scanning box
        height: 250
      },
      fps: 5, // fps for qr code scanning, don't make it too high
      })
  
      scanner.render(success, error);
  
      function success(result){
        scanner.clear();
        setScanResult(result);
      }
  
      function error(){
        console.log("no code scanned");
      }
  },[])
  
  


  
  return (
    <main className={styles.main}>
      { scanResult ? (
          // If the scan result was a success, do the following:
          <div>
            <p>Scan Result: {scanResult}</p>
          </div>
        ) : (
          // Otherwise, do this:
          <div id="reader"></div>
        )
      }

  <Podium titles={titles} />
  );
}
