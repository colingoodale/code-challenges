//substring
//Substring returns sections of strings based on what indexes we ask for, defaulting to the final index of a string

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//Example
function example() {
    const str = 'Mozilla';

    console.log(str.substring(1, 3));
    // expected output: "oz"

    console.log(str.substring(2));
    // expected output: "zilla"
}
example()

//Create a function that returns two substrings, each should represent half of the array.
//Rounding: Math.round()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function half(str) {
    halfway = Math.round(str.length / 2)
    str1 = str.substring(0, halfway);
    str2 = str.substring(halfway);
    console.log("1 ", str1, "2 ", str2);
}
half("Abrenikula");
half("This is the story of a girl")
