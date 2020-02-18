//Create a function that console logs the argument array
//We are provided the argument array with the variable arguments in javascript
//Check out this page for info on the arguments array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function args() {

}
args(1, 2, 3);
args("Hi", "I", "Am", "Bobby", "Joe");
args("hello", 1, "Joey", 2, "Gibblets", 3);

//Create a function that console logs the data type of the arguments array
//We use typeof in the syntax (typeof arr) to return it's dataType
function argsDataType() {

}
argsDataType(1, 2, 3);
argsDataType("Hi", "I", "Am", "Bobby", "Joe");
argsDataType("hello", 1, "Joey", 2, "Gibblets", 3);

//Use a for loop to console log each index of the arguments array
function argsFor() {

}
argsFor(1, 2, 3);
argsFor("Hi", "I", "Am", "Bobby", "Joe");
argsFor("hello", 1, "Joey", 2, "Gibblets", 3);

//We can pattern our arguments with variables that we expect the dataType of.
//We can start very simply and build the logic that drives the internet with this simple principle.
//Review these resources on Recursion to become familiar with one of the basic precepts of synchronous languages.

//Recursive: relating to or involving a program or routine of which a part requires the application of the whole, 
//so that its explicit interpretation requires in general many successive executions.
//Recursion: The repeated application of a recursive procedure or definition

//In general, Recursion is the principle of dividing our functions into smaller functions that can handle
//expected data. We use this to create functions that can perform mathematics with whatever integers given, 
//the mapping of form data into and object, present the same data available on multiple companies without
//having to write code for each company.

//https://en.wikipedia.org/wiki/Recursion_(computer_science)
//https://everythingcomputerscience.com/discrete_mathematics/Recurssion.html
//https://www.cs.cmu.edu/~adamchik/15-121/lectures/Recursions/recursions.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion

//Create a function that takes two numbers and console logs their sum

function add(a, b) {

}

add(1, 9);
add(4, -9);
add(10, 23);
add(-1092003, 1092098);

//Create a function that uses (a+b)-1 to find the maximum length of the third side of a triangle

function triangle(a, b) {

}

triangle(6, 5);
triangle(11, 43);
triangle(5, 6);