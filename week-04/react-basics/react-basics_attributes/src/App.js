import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">This is my h2</h2>
      <label htmlFor="test">This is my label</label>
      <input id="test"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/CAT">
        This is my link
      </a>
    </article>
  );
}
