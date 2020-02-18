//match()
//The match() method retrieves the result of matching a string against a regular expression.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

//example
function example() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    // expected output: Array ["T", "I"]
}
example();

//Create a funciton that takes a string and returns an array containing the vowels in the string
//Use a regular expression
function vowels(str) {

}
vowels("Hello");
vowels("Mercucio");

//Create a function that takes variable number of strings in the arguments
//Return a set of nested arrays containing each vowel in the corresponding string
function nestedVowels() {

}

nestedVowels("Hello, this is albert", "My name is Jeff", "The spiddidly Diddidly", "Annie get your gun", "This is the story of a girl");