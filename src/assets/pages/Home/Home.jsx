import React from "react";
import { useEffect, useState, useRef } from "react";

import styles from "./Home.module.css";
import Options from "./components/Options";

export default function Home() {
  let [isRunning, setIsRunning] = useState(false);

  let [cappedX, setCappedX] = useState(0);
  let [cappedY, setCappedY] = useState(0);

  let [text, setText] = useState("Times New Variable");

  let isDesktop = window.innerWidth > 737;

  function handleOrienationPermission(e) {
    //Skip the functionality of non-orientation devices

    if (isDesktop) {
      if (typeof DeviceOrientationEvent === "undefined" || !DeviceOrientationEvent.requestPermission) return;
    }

    // Request permission for iOS 13+ devices
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") DeviceMotionEvent.requestPermission();

    if (isRunning) {
      window.removeEventListener("deviceorientation", handleOrientation);
      setIsRunning(false);
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
      setIsRunning(true);
    }
  }

  function handleOrientation(event) {
    setCappedX(Math.min(400, Math.max(0, Math.round(event.gamma * 6.5) + 0)));
    setCappedY(Math.min(400, Math.max(0, Math.round(event.beta * 7.5) - 250)));
  }

  function handleMouseMove(event) {
    if (!isDesktop) return;
    setCappedX((event.clientX / window.innerWidth) * 400 * 2 - 400);
    setCappedY((event.clientY / window.innerHeight) * 400);
  }

  function handleChange(e) {
    setText(e.target.value); // Updates state with the new input value
  }

  useEffect(() => {
    document.querySelector(":root").style.setProperty("--cursAxis", cappedX);
    document.querySelector(":root").style.setProperty("--wghtAxis", cappedY);
  }, [cappedX, cappedY]);

  return (
    <div className={styles.container} onMouseMove={(e) => handleMouseMove(e)}>
      {!isRunning && !isDesktop && <button onClick={(e) => handleOrienationPermission(e)}>enter</button>}
      {/* <input className={styles.title} type="text" value={text} onChange={(e) => handleChange(e)}></input> */}
      <div className={styles.title} contentEditable="true">
        {text}
      </div>
      {/* {cappedY !== 0 && <div>{`${cappedY}, ${cappedX}`}</div>} */}
      <Options />
    </div>
  );
}
