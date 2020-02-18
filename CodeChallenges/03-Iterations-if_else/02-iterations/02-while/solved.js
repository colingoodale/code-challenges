//Here we'll be exploring a while loop and the basics behind the use

//While
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

//A while loop operates by listening to a variable to determine it's run time
//it will attempt the logic inside of it until it notices a change, hence the while name

//Here is an example for the syntax

function whileBasic(n) {
    while (n < 3) {
        console.log("waiting");
        n++;
    }
    console.log(n);
}

whileBasic(0);

//pay attention to the log and you will see that it logs waiting 3 times before printing out number
//This is specified in the conditional statement of (n<3)

//A do/while statement allows us to perform logic while a condition is true

//Create a function that has a variable result = "This is the result"
//Perform a while loop on an integer and concatanate that integer to your string in your do function
//Set your while conditional to the integer being less than 5
//This should result in "This is the result12345"

function doWhile() {
    let result = "This is the result";
    let i = 0;

    do {
        // console.log("pre-action " + result);
        i = i + 1;
        result = result + i;
        // console.log("post-action " + result)
    } while (i < 5);

    console.log(result);
}

doWhile();

