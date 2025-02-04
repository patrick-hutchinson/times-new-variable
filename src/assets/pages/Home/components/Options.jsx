import React from "react";
import { useEffect, useState, useRef } from "react";

export default function Options() {
  let [isDarkmode, setIsDarkmode] = useState(false);
  let [showOptions, setShowOptions] = useState(false);

  let [fontSize, setFontSize] = useState(50);
  let [lineHeight, setLineHeight] = useState(1);
  let [letterSpacing, setLetterSpacing] = useState(1);

  useEffect(() => {
    if (isDarkmode) {
      document.querySelector(":root").style.setProperty("--backgroundColor", "#000");
      document.querySelector(":root").style.setProperty("--fontColor", "#fff");
    } else {
      document.querySelector(":root").style.setProperty("--backgroundColor", "#fff");
      document.querySelector(":root").style.setProperty("--fontColor", "#000");
    }
  }, [isDarkmode]);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  function handleFontSize(e) {
    setFontSize(e.target.value); // Updates state with the new input value
    document.querySelector(":root").style.setProperty("--fontSize", fontSize + "px");
  }
  function handleLineHeight(e) {
    setLineHeight(e.target.value); // Updates state with the new input value
    document.querySelector(":root").style.setProperty("--lineHeight", lineHeight);
  }
  function handleLetterSpacing(e) {
    setLetterSpacing(e.target.value); // Updates state with the new input value
    document.querySelector(":root").style.setProperty("--letterSpacing", letterSpacing + "em");
  }

  return (
    <div className="container">
      {showOptions && (
        <ul>
          <li onClick={() => setIsDarkmode(!isDarkmode)}>
            <button>black/white</button>
          </li>
          <li>
            <input type="range" min="10" max="800" value={fontSize} onChange={handleFontSize} />
          </li>
          <li>
            <input type="range" min="0.5" max="2" step="0.01" value={lineHeight} onChange={handleLineHeight} />
          </li>
          <li>
            <input type="range" min="-0.2" max="0.2" step="0.001" value={letterSpacing} onChange={handleLetterSpacing} />
          </li>
        </ul>
      )}
      <button onClick={toggleOptions}>Options</button>
    </div>
  );
}
