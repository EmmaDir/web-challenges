import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click button 1</Button>
      <Button>Click button 2</Button>
      <Button>Click button 3</Button>
      <Button>Click button 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
