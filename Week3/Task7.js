const [,, num1, num2, operation] = process.argv;

// Validate inputs
if (!num1 || !num2 || !operation || isNaN(num1) || isNaN(num2)) {
    return console.error("Usage: node calculator.js <num1> <num2> <operation>");
}

// Perform operation
const a = parseFloat(num1), b = parseFloat(num2);
const operations = {
    plus: a + b,
    minus: a - b,
    multiply: a * b,
    divide: b !== 0 ? a / b : "Error: Division by zero",
    modulus: b !== 0 ? a % b : "Error: Modulus by zero"
};

// Print result
console.log(operations[operation.toLowerCase()] || "Error: Unsupported operation");
