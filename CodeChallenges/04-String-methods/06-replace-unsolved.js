//replace()
//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
//The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
//If pattern is a string, only the first occurrence will be replaced.
//The original string is untouched

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

//RegEx
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//example

function example() {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    const regex = /dog/gi;

    console.log(p.replace(regex, 'ferret'));
    // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

    console.log(p.replace('dog', 'monkey'));
    // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
}
example();

//Create a function that takes a string that is a sentence
//use a regular expression to replace specific words with ***** for each character of your specified words.
function sanitizeChat(str) {

}
sanitizeChat("Those damn noobs, coming in this damn game and damning it up. You damn noobs need to get back to noobland. DAMN")