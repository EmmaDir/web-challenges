console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const myTitle = "This is the title!";
const myText = "Welcome to my first post!";
let myLikes = 200;
const myUser = "StudentXYZ";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(myTitle);
console.log(myText);
console.log(myUser);
console.log(isReported);
console.log(myLikes);

// --^-- write your code here --^--
myLikes++;
console.log(myLikes);
