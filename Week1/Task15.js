//Define an object called calculator with properties x and y. Add a method named calculate to the object,
//  which takes an operation string ("add", "subtract", "multiply", "divide") and uses an arrow function
//  to perform the corresponding operation on x and y. Inside the arrow function, use the "this" keyword 
// to access the object properties. Test the calculator with different operations.

const calculator = {
    x: 10,
    y: 5,

    // Object mapping operations to arrow functions
    calculate : function (operation) {
        const operations ={
        add :() => this.x + this.y,
        subtract:() => this.x - this.y,
        multiply:() => this.x * this.y,
        divide: () => (this.y !== 0 ? this.x / this.y : "Cannot divide by zero")
        };
        return operations[operation]();

    },
    
}

console.log(calculator.calculate("add"));        
console.log(calculator.calculate("subtract"));  
console.log(calculator.calculate("multiply"));   
console.log(calculator.calculate("divide"));    
