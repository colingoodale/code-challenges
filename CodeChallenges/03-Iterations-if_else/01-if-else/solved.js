//If Else statements drive a lot of code, because it allows us to compared the data we are recieving with something 
//we expect. This can be used recursively to create some of the most complex algorithms today.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

//Create a function that returns true if our function is called with a string as an argument or false if it isn't a string
function string(str) {
    if (typeof str === typeof "") {
        console.log(true)
    } else {
        console.log(false);
    }
}

string("hello");
string(2)

//Switch cases can be used to organize a complex set of if else statements, or rather a simple if/else that has
//many outcomes

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//https://www.tutorialspoint.com/es6/es6_switch_case_statement.htm

//Create a function that console logs a string telling us the data type using a switch case.

function switchy(a) {
    switch (a) {
        case (typeof a === typeof ""):
            console.log("string");
        case (typeof a === typeof 1):
            console.log("number");
        case (typeof a === typeof null):
            console.log("null");
        case (typeof a === typeof true):
            console.log("Boolean")
            break;
    }
}

switchy("Hello");
switchy(5);
switchy(null);
switchy(false);