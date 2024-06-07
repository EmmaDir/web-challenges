console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

const getCurrentHourArrow = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

const getVectorLengthArrow = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

function cleanInput(string) {
  return string.toLowerCase().trim();
}

const cleanInputArrow = (string) => string.toLowerCase().trim();

console.log(getCurrentHourArrow());
console.log(getVectorLengthArrow(5, 3, 17));
console.log(cleanInputArrow("HELLO WORLD!"));

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

function isOddAndSmallFunction(number) {
  if (number > 10 || number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

const add3 = (a, b, c) => a + b + c;

function add3Function(a, b, c) {
  return a + b + c;
}

const repeat10 = (string) => string.repeat(10);
function repeat10Function(string) {
  return string.repeat(10);
}

console.log(isOddAndSmallFunction(17));
console.log(add3Function(5, 7, 12));
console.log(repeat10Function("Hello"));
