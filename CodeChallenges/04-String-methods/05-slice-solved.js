//slice()
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

//example
function example() {
    const str = 'The quick brown fox jumps over the lazy dog.';

    console.log(str.slice(31));
    // expected output: "the lazy dog."

    console.log(str.slice(4, 19));
    // expected output: "quick brown fox"

    console.log(str.slice(-4));
    // expected output: "dog."

    console.log(str.slice(-9, -5));
    // expected output: "lazy"
}
example()

//Create a function that takes two number in it's argument
//slice a predetermined sentence at those indexes and return the result
function sliced(a, b) {
    var str = "This is a pretty long string, hopefully they don't over cut it, but it they do they'll get an error";
    console.log(str.slice(a, b));
}
sliced(4, 12);
sliced(0, 15);
sliced(5, 10);
sliced(0, 500);