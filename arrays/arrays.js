// Create an - by enclosing a comma-separated list of value within square brackets "[]"

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'banana', 'orange'];

// Accessing array elements
/*
Arrays are zero-indexed, which menas the first element is at index 0, the second at index 1, and so on
*/

console.log(numbers[0]);    // Output: 1
console.log(fruits[1]);     // Output: 'banana'

// Modifying array elements
fruits[2] = 'grape';
console.log(fruits);    // Output: [apple, banana, grape]

// Array methods
/* 
JavaScript provides a range of built-in methods to manipulate arrays:

push(): Adds one or more elements to the end of an array.
pop(): Removes and returns the last element of an array.
shift(): Removes and returns the first element of an array, shifting the rest of the elements.
unshift(): Adds one or more elements to the beginning of an array, shifting the existing elements.
splice(): Adds or removes elements at a specific index in an array.
concat(): Combines two or more arrays to create a new array.
slice(): Creates a new array by copying a portion of an existing array.
indexOf(): Returns the index of the first occurrence of a specified value in an array.
includes(): Checks if an array contains a specified value, returning true or false.
*/

fruits.push('kiwi');   // Add 'kiwi' to the end
const removedFruit = fruits.pop(); // Remove and return the last element ('kiwi')
fruits.shift();        // Remove the first element ('apple')
fruits.unshift('pear'); // Add 'pear' to the beginning

const slicedFruits = fruits.slice(1, 3); // Creates a new array ['banana', 'grape']
const indexOrange = fruits.indexOf('orange'); // Returns -1 (not found)
const hasBanana = fruits.includes('banana'); // Returns true

const combinedArray = fruits.concat(['peach', 'mango']); // Combines arrays




