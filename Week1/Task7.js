//Develop a program that highlights the differences in scoping between let and var. Create a block-scoped variable
// using let and a function-scoped variable using var. Attempt to access these variables outside their respective
//  scopes and explain the results in the comments.

// 'let' is block-scoped
let m = 25;  // 'm' is declared globally and accessible anywhere in this file

function add(x, y) {
    // 'var' is function-scoped
    var n = 50;  // 'n' is only accessible inside this function

    // 'let' inside a block (block-scoped variable)
    if (true) {
        let p = 100;  // 'p' exists only within this block
        console.log("p inside block scope: " + p);  // Accessible inside the block
    }

    // console.log(p); // ReferenceError: 'p' is not defined outside the block

    console.log("m inside function scope: " + m); // Accessible because 'm' is globally declared with let
    console.log("n inside function scope: " + n); // Accessible inside function (function-scoped)
    console.log(x + y);  // Function logic
}

console.log("m in global scope: " + m); // Accessible because 'm' is globally declared with let

//console.log(n); // ReferenceError: 'n' is not defined (var is function-scoped, not global)

// console.log(p); // ReferenceError: 'p' is not defined (let is block-scoped, not global)

add(2, 3);  