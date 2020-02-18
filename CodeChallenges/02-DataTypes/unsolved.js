//Here we'll review our dataTypes and how we deal with them
//The most important dataType we deal with are objects, they are the building blocks for JSON operations accross
//our applications and currently the web in general.


//Here are some resources on data types in regards to Javascript and how it handles them specifically

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

//Here is a list of resources regarding primitive data types in javascript

//Primitve
//https://developer.mozilla.org/en-US/docs/Glossary/Primitive

//Boolean
//https://developer.mozilla.org/en-US/docs/Glossary/Boolean

//Null
//https://developer.mozilla.org/en-US/docs/Glossary/Null

//undefined
//https://developer.mozilla.org/en-US/docs/Glossary/Undefined

//Number
//https://developer.mozilla.org/en-US/docs/Glossary/Number

//BigInt
//https://developer.mozilla.org/en-US/docs/Glossary/BigInt

//String
//https://developer.mozilla.org/en-US/docs/Glossary/String

//Symbol
//https://developer.mozilla.org/en-US/docs/Glossary/Symbol

//Object
//https://developer.mozilla.org/en-US/docs/Glossary/Object


//Using typeof
//typeof is a special method that is written into the base code
//it used with this syntax
//console.log(typeof variable)
//Create a function that takes a single argument of variable dataTypes and console logs the datatype

function type(thing) {

}

type([1, 3, 4, 5]);
type("hello, I'm a string");
type(12345125);
type({
    key: "value"
})
type(true);
type(null);
type("");
type();
type([]);


//Expecting Data Types
//Most of recursion is based on the principle that we can expect our dataType. 
//Create a function that when called with data, returns true if it's an object and false if it's not

function objIsIt(a) {

}

objIsIt({})
objIsIt([])
objIsIt("abd")
objIsIt(2)
objIsIt(null)
objIsIt("")
objIsIt(true)