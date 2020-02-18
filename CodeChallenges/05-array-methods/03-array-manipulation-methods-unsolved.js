//.join()
//This method allows us to turn an array into a string
//with specificed string values between our origin indexes

function joinExample(arr) {
    console.log(arr.join("-"));
}
joinExample(["File", "save", "format"]);

//Create a funciton that takes a variable number of arrays and returns a string of the entire thing
function multiJoin(arr) {

}
multiJoin([["Hello,", "story begin now."], ["We meet hero.", 'Hero is weak.', 'Hero works on farm.'], ['Now we meet bad guy.', 'He evil.', "He kill heroe's family"], ["Hero mad now.", "Him fight evil man", 'Him lose fight'], ["Hero train hard.", "Challenge bad man again.", "This time him beat bad man.", 'Get REKT bad man.']]);


//.reduce()
//This function performs privided logic on an array and alters the 0 index to compile and reduce the array to a single value

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function exampleReduce(arr) {
    reducer = (a, b) => a + b;
    console.log(arr.reduce(reducer));
}
exampleReduce([1, 2, 3, 4, 5])

//Create a function that uses reduce to concatanate a string from varaible strings given in the arguments
function stringCreator() {

}
stringCreator("Hello child", "My name is Cthulu", "Harde Har Har", "YEET!");

//.reverse()
//This function changes the order of indexes in an array to completely reversed
//It changes the original array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

function exampleReverse(arr) {
    arr.reverse();
    console.log(arr);
}
exampleReverse([1, 2, 3, 4, 5])


//.sort()
//The sort() method sorts the elements of an array in place and returns the sorted array. 
//The default sort order is ascending, built upon converting the elements into strings, 
//then comparing their sequences of UTF-16 code units values.

//you'll notice that in the example we can see sort is manipulating the original array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function exampleSort(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    arr.sort((a, b) => b - a);
    console.log(arr);

}

exampleSort([5, 4, 6, 4, 2, 6, 7, 5, 2, 4, 6, 4, 2, 4, 5, 2, 4, 3, 3, 4, 2, 4, 2])

//Create a funciton that takes an array of integers
//Return a set of nested arrays
//The first should be a utf-16 sort
//second should be an ascending sort
//third should be a descending sort
function multiSort(arr) {

}
multiSort([1, 2, 4, 5, 42, 4, 35346, 45, 345, 36, 345, 345, 6, 35, 345, 6, 36, 24, 53, 45, 453, 345, 3456, 262, 4542, 62, 724677, 6])

