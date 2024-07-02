import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1234,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 5678,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 9012,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 3456,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 7890,
      name: "🍋 Lemon",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => {
        return <Card key={id} name={name} color={color} />;
      })}
    </div>
  );
}
