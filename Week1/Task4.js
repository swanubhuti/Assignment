// 'var' declares a global variable (or function-scoped if inside a function)
var a = 10;  // Global variable, can be reassigned and accessed anywhere

function add(x, y) { 
    // 'let' declares a block-scoped variable
    let b = 20;  // Block-scoped variable, only accessible within this function

    // 'const' declares a block-scoped constant (cannot be reassigned)
    const c = 30;  // Block-scoped, value cannot be changed

    console.log("b under block scope " + b); //  Accessible inside this function (block scope)
    console.log("a under global scope " + a); //  Accessible because 'a' is globally declared with var
    console.log("b under block scope " + c); // 'c' is accessible inside this function
    console.log(b + c); //  Adds b and c, both accessible inside this function
}

// 'var' can be reassigned even outside functions
a = 15;  // 'a' is updated globally, because 'var' is function-scoped or global

add(); // Calling the function executes the console logs inside it

console.log(a); //  Accessible, prints 15 (since 'a' is global)

// console.log(b);  Error: 'b' is not defined outside the function (block scope)
// 'b' was declared using 'let', making it function-scoped and inaccessible here.

console.log(c); //  Error: 'c' is not defined outside the function
// 'c' is a constant and block-scoped inside 'add()', so it cannot be accessed here.
