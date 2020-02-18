//toUpperCase() and toLowerCase()
//These are simple methods that transform the first character in a string to it's Capital or Lowercase version

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

//Create a function that takes a single characters string
//Return true if it's Capital and false if it's lowercase
function caps(char) {
    if (char === char.toUpperCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
}
caps("H");
caps("h");

//Create a function that does the same, but this time with lower case
function lower(char) {
    if (char === char.toLowerCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
}
lower("H");
lower("h");