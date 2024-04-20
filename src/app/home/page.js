"use client";

import styles from "../page.module.css";
import Leaderboard from "./leaderboard";
import Placement from "./placement";

import { Html5QrcodeScanner } from "html5-qrcode";
import Podium from "./podium";
import { useEffect, useState } from "react";
import Image from "next/image";
import FloatingButton from "./floating_button";
import { FaCamera } from "react-icons/fa";

export default function Home(props) {
  var titles = ["Easton", "Denton", "Elicott", "Hello"];
  const [scanResult, setScanResult] = useState(null);
  const [showScanUI, setShowScanUI] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250, // height and width of the scanning box
        height: 250,
      },
      fps: 5, // fps for qr code scanning, don't make it too high
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error() {
      console.log("no code scanned");
    }
  }, []);

  const onShowScanClick = () => {
    setShowScanUI(true);
  };

  return (
    <main className={styles.main}>
      {!showScanUI ??
        (scanResult ? (
          // If the scan result was a success, do the following:
          <div>
            <p>Scan Result: {scanResult}</p>
          </div>
        ) : (
          // Otherwise, do this:
          <div id="reader"></div>
        ))}

      <FloatingButton onclick={onShowScanClick}>
        <FaCamera
          style={{ width: 1 + "rem", height: 2 + "rem" }}
          className={styles.logo}
        />
      </FloatingButton>

      <Podium points_normalized={[1, 1, 1, 1]} titles={titles} />

      <Leaderboard>
        {" "}
        <Placement />{" "}
      </Leaderboard>
    </main>
  );
}
