import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Welcome</h1>
      <p>Hello World!</p>
    </article>
  );
}
