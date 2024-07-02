import "./styles.css";

export default function App() {
  return <Greeting name="Andrea" />;
}

function Greeting({ name }) {
  return <h1>{name === "Andrea" ? "Hello, Coach!" : `Hello ${name}!`}</h1>;
}
