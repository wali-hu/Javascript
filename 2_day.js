//1. Write a function that takes a number and returns its square.

function square(num) {
    return num * num;
}

console.log(square(4)); // 16

//2. Create a function that takes two numbers and returns their sum.

function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5)); // 8

//3. Convert the above functions into arrow functions.

// Arrow function for square
const square = (num) => num * num;
console.log(square(4)); // 16

// Arrow function for sum
const sum = (a, b) => a + b;
console.log(sum(3, 5)); // 8

//4. Use map() to create a new array from an existing array, where each element is doubled.

const arr = [1, 2, 3, 4];
const doubled = arr.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

//5. Use filter() to return only the even numbers from an array.

const arr1 = [1, 2, 3, 4, 5, 6];
const evens = arr1.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]

//6. Use reduce() to find the sum of all elements in an array.

const arr2 = [1, 2, 3, 4];
const sum = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 10

//7. Write a higher-order function that takes a function and an array as arguments and applies the function to each 
//   element of the array.

function applyFunctionToArray(func, arr) {
    return arr.map(func);
}

const multiplyByThree = num => num * 3;
const result = applyFunctionToArray(multiplyByThree, [1, 2, 3, 4]);

console.log(result); // [3, 6, 9, 12]


//8. Implement an arrow function that returns the length of a string.

const stringLength = str => str.length;
console.log(stringLength("hello")); // 5

//9. Write a function using reduce() to calculate the product of all numbers in an array.

function productOfArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(productOfArray([1, 2, 3, 4])); // 24