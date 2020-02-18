//indexOf()
//This method allows you to search a string and return the index
//of a character if it's in the string. Otherwise we expect it to return
//the integer -1. This is useful in checking data being passed as JSON.


function example() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
    // expected output: "The index of the first "dog" from the beginning is 40"

    console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
    // expected output: "The index of the 2nd "dog" is 52"
}
example();


//Create a funciton that takes a string and returns true if it contains any vowels or false if it has none.
function vowels(str) {

}
vowels("trip");
vowels("jfhg");

//Create a function that takes an array of integers and returns an array of boolean values.
//Return even if it's an even integer and return false if it's an odd integer

//Remainder is an efficient way to check if something is divisible by another thing.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

function bigVowels(arr) {

}
bigVowels([1, 3, 4, 5, 2, 4, 5, 6, 3, 6, 7, 8, 6, 35]);
bigVowels([234987, 80598, 4872649, 384958039, 4267, 57928479, 934872345249834986239858298364, 42837498287394872039480235, 293587230958203470928]);

//Create a function that takes an array of strings and returns a set of nested arrays, the nested arrays containing a true or false value,
//that is determined by whether the corresponding index in the original array is a capital letter or not.
//Return true if the letter is capital and false if it's lower case.

function complexCaps(arr) {

}

complexCaps(["ihFHdiaH", "HDhifhidHIUDhifHI", "DhiuFIuhFihU", "DHoiHFoihDFhoiijo"]);