import React from "react";

import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./assets/pages/Home/Home";

function App() {
  // Easing Functions
  // useEffect(() => {
  //   let easingFactor = 1.8;

  //   setTimeout(() => {
  //     const duration = 2000; // Animation duration in milliseconds
  //     const startValue = 0; // Initial value of the property
  //     const endValue = 400; // Final value of the property

  //     let startTime;
  //     let direction = 1; // Animation direction: 1 for forward, -1 for backward

  //     function animate(timestamp) {
  //       if (!startTime) startTime = timestamp;

  //       const elapsed = timestamp - startTime;
  //       const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
  //       const easedProgress = easeInOutCubic(progress); // Apply ease-in-out easing function

  //       let animatedValue;

  //       if (direction === 1) {
  //         animatedValue = startValue + (endValue - startValue) * easedProgress;
  //       } else {
  //         animatedValue = endValue - (endValue - startValue) * easedProgress;
  //       }

  //       document.querySelector(":root").style.setProperty("--wghtAxis", animatedValue);

  //       if (progress >= 1) {
  //         direction *= -1; // Reverse animation direction
  //         startTime = null; // Reset start time for the new phase
  //       }

  //       requestAnimationFrame(animate);
  //     }

  //     // Easing function
  //     function easeInOutCubic(t) {
  //       // Faster start
  //       if (t < 0.5) {
  //         return Math.pow(2 * t, easingFactor) / 2;
  //       }

  //       // Faster finish
  //       return 1 - Math.pow(2 * (1 - t), easingFactor) / 2;
  //     }

  //     requestAnimationFrame(animate);
  //   }, 1200);

  //   const duration = 2000; // Animation duration in milliseconds
  //   const startValue = 0; // Initial value of the property
  //   const endValue = 400; // Final value of the property

  //   let startTime;
  //   let direction = 1; // Animation direction: 1 for forward, -1 for backward

  //   function animate(timestamp) {
  //     if (!startTime) startTime = timestamp;

  //     const elapsed = timestamp - startTime;
  //     const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
  //     const easedProgress = easeInOutCubic(progress); // Apply ease-in-out easing function

  //     let animatedValue;

  //     if (direction === 1) {
  //       animatedValue = startValue + (endValue - startValue) * easedProgress;
  //     } else {
  //       animatedValue = endValue - (endValue - startValue) * easedProgress;
  //     }

  //     document.querySelector(":root").style.setProperty("--cursAxis", animatedValue);

  //     if (progress >= 1) {
  //       direction *= -1; // Reverse animation direction
  //       startTime = null; // Reset start time for the new phase
  //     }

  //     requestAnimationFrame(animate);
  //   }

  //   // Easing function
  //   function easeInOutCubic(t) {
  //     // Faster start
  //     if (t < 0.5) {
  //       return Math.pow(2 * t, easingFactor) / 2;
  //     }

  //     // Faster finish
  //     return 1 - Math.pow(2 * (1 - t), easingFactor) / 2;
  //   }

  //   requestAnimationFrame(animate);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
