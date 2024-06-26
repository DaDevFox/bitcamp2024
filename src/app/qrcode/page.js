"use client";

import styles from "../page.module.css";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

export default function qrcodepage(props) {

  const [scanResult, setScanResult] = useState(null);
  
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: 1000,
      fps: 5, // fps for qr code scanning, don't make it too high
      aspectRatio: 1, // this will not crop the image and will send full image to the scanner
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

  </main>
  );
}
