// Task 1: Create a class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Task 2: Extend Person class to create Student
class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    // Override introduce method
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my Student ID is ${this.studentID}.`);
    }
}

// Task 3: Create instances and demonstrate introduce method
const person1 = new Person("Alice", 25);
const student1 = new Student("Bob", 20, "S12345");

person1.introduce(); // Output: Hello, my name is Alice and I am 25 years old.
student1.introduce(); // Output: Hello, my name is Bob, I am 20 years old, and my Student ID is S12345.
