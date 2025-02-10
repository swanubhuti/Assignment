const PI = 3.14;
console.log("Value of PI:", PI);

// Attempting to reassign a constant (will cause an error)
// PI = 3.15; // TypeError: Assignment to constant variable

// Declaring an object with const
const person = {
    name: "John",
    age: 25
};

console.log("Original: ", person);

// Reassign (error)
// person = { name: "Alice", age: 30 }; // TypeError: Assignment to constant variable

// Modifying properties of a const object (allowed)
person.age = 30;  //  Allowed (object properties are mutable)
console.log("Modified: ", person);

// Declaring an array with const
const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers array:", numbers);

// Reassign (error)
// numbers = [10, 20, 30]; // TypeError: Assignment to constant variable

// Modifying elements inside the const array (allowed)
numbers.push(6); //  Allowed (array elements can be modified)
console.log("Modified numbers array:", numbers);
