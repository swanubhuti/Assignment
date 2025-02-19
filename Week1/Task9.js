// Create a program that declares variables with different data types: a number (age), a string (name), and a
//  boolean (isStudent). Perform operations like concatenating the name with a greeting, converting the
//  age to a string, and combining the boolean value with a string to form a sentence. Print the results.


let age = 20;
let Name = "Shanu";
let isStudent = true;


// Concatenating
console.log("Hello miss "+ Name + " Welcome!");

//Num to string
let age2 = age.toString();
console.log(typeof(age2));
console.log(age2)

// Statement
console.log(`Hello ${Name} your age is ${age2} and you are a student: ${isStudent} `)