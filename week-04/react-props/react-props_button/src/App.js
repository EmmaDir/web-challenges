import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="pink" text="I am a button" onClick={handleClick} />;

  function handleClick() {
    console.log("You clicked me!");
  }
}

function Button({ color, text, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
