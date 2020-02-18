//We will now begin to discuss iterations
//For Loops

//For
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

//Create a funciton that loops through an array of numbers and adds 1 to each index, return the new array
//console log your arguments array and the result without creating a new variable
function forAdd(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] += 1
    }
    console.log(arr);
}

forAdd([1, 2, 3, 4, 5]);

//Create a function that changes the above function to return the sum of the array using reduce, after you've added 1 to eachindex


//Create a funciton that takes a single integer, console log the sum of a permutation of +1 starting at zero
//and including the number given as the last number.
function perm(num) {
    result = 0;
    for (i = 1; i < num + 1; i++) {
        result += i
    }
    console.log(result);
}

perm(4);
perm(10);
perm(1002);



//Create a function that console.logs a variable number of arguments
function args() {
    for (i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
args(1, 2, 3, 4, 5);
args("hello", 1, "hoijo", 123, null, true, "", 19 ^ 12);

//Change this your last function to console log the data type of each argument

function argsDataType() {
    for (i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i]);
    }
}

argsDataType(1, 2, 3, 4, 5);
argsDataType("hello", 1, "hoijo", 123, null, true, "", 19 ^ 12);

//Create a function that takes variable arguments and 
//console logs an object containing a key for the value at the index, the index, and data type

function argsObj() {
    result = [];
    for (i = 0; i < arguments.length; i++) {
        obj = {};
        obj["index"] = i;
        obj["value"] = arguments[i];
        obj["dataType"] = typeof arguments[i];
        result.push(obj);
    }
    console.log(result);
}

argsObj(1, 2, 3, 4, 5);
argsObj("hello", 1, "hoijo", 123, null, true, "", 19 ^ 12);

//Create a function that takes an array of numbers and finds the largest and smallest Integer

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY

function minMax(arr) {
    min = Infinity;
    max = Number.NEGATIVE_INFINITY;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        };
        if (arr[i] < min) {
            min = arr[i];
        };
    };
    console.log("max: " + max, "min: " + min)
};

minMax([1, 2, 3, 4]);
minMax([-1, 2, -3, 4, 65, 76]);

//Create a function that takes a variable number of arrays
//Console log an array that contain an object with the smallest and largest integer in each array
//Make sure to account for negative numbers




function bigLit() {
    result = [];
    for (i = 0; i < arguments.length; i++) {
        obj = {};
        var big = Number.NEGATIVE_INFINITY;
        var lit = Infinity;
        // console.log(big, lit)
        for (j = 0; j < arguments[i].length; j++) {
            // console.log(arguments[i][j])
            if (arguments[i][j] > big) {
                big = arguments[i][j];
            }
            if (arguments[i][j] < lit) {
                lit = arguments[i][j]
            }
        }
        obj["big"] = big;
        obj["lit"] = lit;
        // console.log(obj)
        result.push(obj);
    }
    console.log(result);
}

bigLit([1, 2, 3, 4]);
bigLit([1, 2, 3, 4], [12, 3, 5323, -14, 5123, -424, -1242, 1225, 1345, -25234, 24234]);
bigLit([6, 2, 4, 5, 7, 5, 2, 6, 7, 8, 5, 4], [098, 587, 249, 8742, 92548, -1384, -248249, 9258249 - 8248248], [-12381239, -1239123, -12381239, -1329123, -1238140, -148139, -13814014]);

//A binary gap is defined as the number of 0s between each 1 in a binary number
//this does not include the zeroes that appear before a the first 1 in the sequenze
//Create a function that takes an integer and console logs the largest binary gap

//https://www.freecodecamp.org/forum/t/convert-number-to-binary/190125
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

function binaryGap(num) {
    var bin = num.toString(2);
    gap = 0;
    cur = 0;
    for (i = 0; i < bin.length; i++) {
        num = parseInt(bin[i]);
        if (num === 1) {
            if (cur > gap) {
                gap = cur;
                cur = 0;
            }
        } else if (num === 0) {
            cur += 1;
        }
    }
    console.log(gap);
}

binaryGap(13);
binaryGap(1010);
binaryGap(1041)
