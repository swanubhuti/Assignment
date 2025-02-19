// Create an object called person with properties name and age.
//  Add a method named introduce to the object, which logs a message using the "this" keyword to reference
//  the name and age properties. Call the introduce method to introduce the person.

const person ={
    Name: "Shanu",
    age: 21,
    introduce: function() {
        console.log("Your name is: " + this.Name),
        console.log("Your age is: "+ this.age)}

}
person.introduce()