import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleClickMinus}>
          -
        </button>
        <button type="button" onClick={handleClickPlus}>
          +
        </button>
      </div>
    </div>
  );
}
