console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = -4;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs >= 1000000) {
  console.log(numberOfHotdogs * 0.1 + "€");
} else if (numberOfHotdogs >= 100) {
  console.log(numberOfHotdogs + "€");
} else if (numberOfHotdogs >= 5) {
  console.log(numberOfHotdogs * 1.5 + "€");
} else if (numberOfHotdogs > 0) {
  console.log(numberOfHotdogs * 2 + "€");
} else {
  console.log(0 + "€");
}

// Part 4: Daytime
const currentHour = 18;

let statement = "";

currentHour >= 17
  ? (statement = "Partytime!!!")
  : (statement = "Still need to learn...");

// if (currentHour >= 17) {
//   statement = "Partytime!!!";
// } else {
//   statement = "Still need to learn...";
// }

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName == "Roland" ? "Coach" : userName) + "!";

console.log(greeting);
