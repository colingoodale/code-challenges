//split()
//Split is used on a string to return an array of strings that eliminate the specified character and subdivide that
//string into a shallow object array.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//Example
function example() {
    const str = 'The quick brown fox jumps over the lazy dog.';

    const words = str.split(' ');
    console.log(words[3]);
    // expected output: "fox"

    const chars = str.split('');
    console.log(chars[8]);
    // expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // expected output: Array ["The quick brown fox jumps over the lazy dog."]
}
example()

//Create a function that splits a string that is a sentence into an array whose indexes represent each full word
function words(str) {

}
words("My name is Jeff")

//Create a function that takes a variable number of strings in its arguments.
//Return a set of nested arrays, each index a character in the corresponding string
function wordsComplex() {

}
wordsComplex("hello jeff i am", "Hello", "Jeffery", "JeFfErY", 'Yo Sebastian');