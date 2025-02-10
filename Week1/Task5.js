// Hoisting with 'var'
console.log(a); // Undefined (hoisted, but not assigned)
var a = 10; 
console.log(a); // Prints 10 (now assigned)

// Hoisting with 'let'
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20; 
console.log(b); // Prints 20 (can be used after declaration)

// Function demonstrating hoisting
function testHoisting() {
    console.log("\n Inside function:");

    // Hoisting with 'var' inside function
    console.log(x); // Undefined (hoisted, but not assigned)
    var x = 100;
    console.log(x); // Prints

    console.log(y)//ReferenceError
    let y = 200;
    console.log(y); //Prints 
}

testHoisting();

// Hoisting inside block scope
{
    console.log(blockVar);//Undefined (hoisted inside block, but not assigned)
    var blockVar = 300;
    console.log(blockVar); 

    console.log(blockLet) //ReferenceError:
    let blockLet = 400;
    console.log(blockLet); // Prints 
}

// 'var' variables escape block scope
console.log(blockVar); // Prints (var is function-scoped)

console.log(blockLet);// ReferenceError (let is block-scoped)
