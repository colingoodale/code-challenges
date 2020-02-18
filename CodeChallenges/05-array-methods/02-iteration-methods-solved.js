//In this lesson we'll cover the array methods with predetermined loop logic
//We can use these to make our lives easier and they were built for es6

//.every
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function example(arr) {
    const isUneven = (num) => num % 2 == 0;

    console.log(arr.every(isUneven));
}

example([2, 4, 6, 8]);
example([1, 2, 4, 6, 8]);

//.forEach()
//This method performs the provided functionality to each index of an array

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function example1(arr) {
    arr.forEach(item => {
        item = item += 1
        console.log(item);
    })

}
example1([1, 2, 3, 4, 5]);

//.map()
//This method allows us to manipulate each index of an array and return it creating a new array without destroying the original

function mapExample(arr) {
    console.log(arr.map(item => {
        item += 1;
        return item
    }))
}
mapExample([1, 2, 3, 4, 5])

//.filter()
//This methods allows us to perform logic on each index of an array
//It will determine whether that data passes
//.filter() will create a new array with only the items that pass out check

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filterExample(arr) {
    const even = (num) => {
        if (num % 2 == 0) {
            return num
        }
    };
    const odd = (num) => {
        if (num % 2 != 0) {
            return num
        }
    };
    console.log(arr.filter(even));
    console.log(arr.filter(odd));

}
filterExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])



