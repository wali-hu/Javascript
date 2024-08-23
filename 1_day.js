/* Practice Questions*/

//1. Declare a variable using var inside a function and try accessing it outside the function. What happens?

function myFunction() {
    var insideFunction = "I'm inside the function";
}

console.log(insideFunction); // ReferenceError: insideFunction is not defined


//2. Declare a variable using let inside a block (like an if statement or loop) and try accessing it outside 
//   the block. What happens?

if (true) {
    let insideBlock = "I'm inside the block";
}

console.log(insideBlock); // ReferenceError: insideBlock is not defined

//3. Declare a constant using const and then try to reassign its value. What error do you get?

const myConstant = 10;
myConstant = 20; // TypeError: Assignment to constant variable.

//4. Write a piece of code where you use a variable before it’s declared using var.
//   What value do you get before the declaration?

console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

//5. Now, write similar code using let and const. Observe the difference in behavior compared to var.

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 5;

console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 10;

//6. Create a function where you declare a variable using var inside an if block and see if it is accessible outside
//   the if block within the same function.

function checkVar() {
    if (true) {
        var myVar = "Accessible outside";
    }
    console.log(myVar); // "Accessible outside"
}

checkVar();

//7. Create another function where you declare a variable using let inside an if block and test its accessibility
//   outside the if block.

function checkLet() {
    if (true) {
        let myLet = "Not accessible outside";
    }
    console.log(myLet); // ReferenceError: myLet is not defined
}

checkLet();

//8. Write a function that calculates the sum of numbers from an array. Use let to declare a variable inside a
//   loop to store the sum.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

//9. Modify the function to try using var instead of let. Observe any differences in behavior or scope issues.

function sumArrayWithVar(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArrayWithVar([1, 2, 3, 4])); // 10

