// Exercise 1: Array Sum
/* Write a function that takes an array of numbers as input and return the sum of 
all the numbers in the array. */

function calculateSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculatSum(numbers));


//Exercise: Array Sum

// Step 1: First, we need to define a function that will calculate the sum of numbers in an array. We'll call this function `calculateSum`.


function calculateSum(numbers) {
  // Code for calculating the sum will go here
}


// Step 2: Now, inside the `calculateSum` function, we need to create a variable to keep track of the sum. We'll start with a sum of 0, since we haven't added anything yet.

function calculateSum(numbers) {
  let sum = 0; // Start with sum of 0
}


//Step 3: Next, we'll use a loop to go through each number in the input array. We'll add each number to the `sum` variable as we iterate through the array.


function calculateSum(numbers) {
  let sum = 0; // Start with sum of 0

    for (const number of numbers) {
    sum += number; // Add the current number to the sum
    }
}


// In this step, we're using a `for...of` loop to loop through each number in the `numbers` array. For each iteration of the loop, we add the current number to the `sum`.


//Step 4: Finally, we'll return the `sum` after the loop is finished. This means that the function will give us the total sum of all the numbers in the input array.

function calculateSum(numbers) {
  let sum = 0; // Start with sum of 0

    for (const number of numbers) {
    sum += number; // Add the current number to the sum
    }
        return sum; // Return the total sum
}


// Step 5: Now that our function is complete, we can use it to calculate the sum of numbers in any array. For example:

const numbers1 = [1, 2, 3, 4, 5];
const result = calculateSum(numbers1);

console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)

/* 
When we run this code, it will calculate the sum of the numbers in the `numbers` array and print the result, which is 15 in this case.

So, the `calculateSum` function works by looping through each number in an array, adding them up, and returning the total sum. This is how we can solve the "Array Sum" exercise!

*/








