import React from "react";
import { useEffect, useState, useRef } from "react";

import styles from "./Home.module.css";

export default function Home() {
  let [beta, setBeta] = useState(0);
  let [gamma, setGamma] = useState(0);

  let [cappedBeta, setCappedBeta] = useState(0);
  let [cappedGamma, setCappedGamma] = useState(0);
  let [alpha, setAlpha] = useState(0);

  let [isRunning, setIsRunning] = useState(false);

  function handleOrientation(event) {
    setBeta(event.beta);
    setGamma(event.gamma);
    // setAlpha(event.alpha);
  }

  function handleMouseMove(event) {
    setBeta(event.clientX);
    setGamma(event.clientY);
  }

  useEffect(() => {
    setCappedBeta(Math.min(400, Math.max(0, Math.round(beta * 7.5) - 250)));
    setCappedGamma(Math.min(400, Math.max(0, Math.round(gamma * 6.5) + 0)));
  }, [beta, gamma, alpha]);

  function handleOrienationPermission(e) {
    //Skip the functionality of non-orientation devices
    if (window.innerWidth > 737) {
      if (typeof DeviceOrientationEvent === "undefined" || !DeviceOrientationEvent.requestPermission) return;
    }

    // Request permission for iOS 13+ devices
    // if (DeviceMotionEvent) DeviceMotionEvent.requestPermission();
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") DeviceMotionEvent.requestPermission();

    if (isRunning) {
      window.removeEventListener("deviceorientation", handleOrientation);
      setIsRunning(false);
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
      setIsRunning(true);
    }
  }

  useEffect(() => {
    document.querySelector(":root").style.setProperty("--cursAxis", cappedGamma);
    document.querySelector(":root").style.setProperty("--wghtAxis", cappedBeta);
  }, [beta, gamma]);

  function handleChange(e) {
    console.log(e);
  }

  return (
    <div className={styles.container} onMouseMove={(e) => handleMouseMove(e)}>
      {!isRunning && <button onClick={(e) => handleOrienationPermission(e)}>enter</button>}
      <input className={styles.title} type="text" value="Times New Variable" onChange={handleChange}></input>
      {/* {alpha !== 0 && <div>{`${cappedBeta}, ${cappedGamma}`}</div>} */}
    </div>
  );
}
