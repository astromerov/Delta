

// Big O-Notation with examples
// O(1)
/**
 * Pushing to an array, getting an item at a particular index, adding a child
 * element, etc, will all the same amount of time regardless of the array length
 */

const a1 = performance.now();
smArr.push(27);
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // Less than 1 Millisecond


const b1 = performance.now();
bigArr.push(27);
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // Less than 1 Millisecond

// O(n)
/**
 * All loops are linear growth
 * there is a one-to-one relationship between the size and time completion
 * an array with 1000 times more items will take exactly 1000 times longer
 */

const a3 = performance.now();
smArr.forEach(item => console.log(item));
const a4 = performance.now();
console.log(`Time: ${a3 - a4}`);    // 3 Milliseconds

const b3 = performance.now();
bigArr.forEach(item => console.log(item));
const b4 = performance.now();
console.log(`Time: ${b2 - b1}`); // 13 Milliseconds

//O (n^2)
/**
 * To find a matching pair for each item in an array.
 * It's better to have to do 2000 operations over two separate loops than a million with two nested loops.
 *
 */

const a5 = performance.now();
smArr.forEach(() => {
    arr2.forEach(item => console.log(item));
})
const a6 = performance.now();
console.log(`Time: ${a5 - a6}`);    // 8 Milliseconds

const b5  = performance.now();
bigArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
const b6 = performance.now();
console.log(`Time: ${b5 - b6}`);    // 307 Milliseconds

// O(log n)
/**
 * 'Divide-and-conquer' approach <== it searches progressively more specific sections without
 * looking at most of the data
 */

const sort = arr => {
    if (arr.length < 2) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1, total = arr.length; i < total; i++) {
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    };
    return [
        ...sort(left),
        pivot,
        ...sort(right)
    ];
};

sort(smArr);    // 0 Milliseconds
sort(bigArr);   // 1 Millisecond


// O(n!)
/**
 * A factorial is just the product of every number up to that number. So 6! is
 * 1x2x3x4x5x6 = 720
 */

const factorial = n => {
    let num = n;

    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
        num = n * factorial (n - 1);
    };

    return num;
};

factorial(1); // 2 Milliseconds
factorial(5); // 3 Milliseconds
factorial(10); // 85 Milliseconds
factorial(12); //  11,942 Milliseconds

/**
 * There was an intention of showing factorial(15) instead but anything above 12 was too
 * much and crashed the page, thus proving exactly why this needs to be avoided
 */











