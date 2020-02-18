//Here we'll cover four important methods for manipulating the index locations in an array

//.push()
//This is a method used for adding an index to the end of an array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

function example(arr) {
    arr.push("new string")
    console.log(arr);
}
example(["old string"]);

//Create a function that takes an array of integers
// for each index of the array push a new index that is the 
//difference between 100 and the current integer

//Make sure to use a result array, manipulating the original array will cause an infinite loop
//setting up your variable using the [...arr] syntax will be crucial to manging your loop
function pushing(arr) {

}
pushing([1, 2, 3, 4]);

//.pop()
//This method removes the last index of your array and returns it
//The result of the example will show you a variable with the pop() return and the array after the pop
//You'll see that the variable is the integer that was at the last index
//The array will have also been manipulated and 4 will now be at the last index

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

function example(arr) {
    res = arr.pop()
    console.log(arr, res);
}
example([1, 2, 3, 4, 5])

//Create a function uses .pop() to remove the last index of an array
//Return an array of objects with a key for the original number
//Include a key with true or false depending on whether that number is even or not
//If it's even, return true, if the number is odd, return false

//A while loop is the most efficient way to do this

function builder(arr) {

}

builder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//.unshift()
//This method takes its arguments and adds them to the front of the target array, in order

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

//example
function example(arr) {
    var res = arr.unshift("This", 'is', 'the', 'story', 'of', 'a', 'girl');
    console.log(arr)
}
example(["she", 'cried', 'a', 'river', 'and', 'drowned', 'the', 'whole', 'world'])

//Create a function that takes an array of variable datatypes
//Return the original array with a nested array containing each of the datatypes in the array
//Only mention each datatype once
//This nexted array should be in the 0 index

function getUnShifted(arr) {

}
getUnShifted([{ key: "value" }, "string", 123, "suni", '13', ["123", { key: "value" }], 123, 12.34, null, false, 18 ^ 2, parseInt(12, 10)])

//.shift()
//the shift method removes the first element of an array and returns that element
//It manipulates the original array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

function example(arr) {
    res = arr.shift();
    console.log(res, arr);
}
example([1, 2, 3, 4, 5]);

//Create a function that takes an array and removes the first index
//Do this in a while loop and console log each change to the array and the .shit() value

function cuts(arr) {

}
cuts([1, 2, 3, 4, 5, 6])