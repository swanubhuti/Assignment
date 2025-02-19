//Create a constructor function called Person that takes name and age as parameters and assigns them as
// properties. Add a method greet to the prototype of the constructor, which logs a greeting message using
//the person's name.Instantiate two objects using the Person constructor and call the greet method on both.

function Person(name,age){
    this.name= name
    this.age=age  
}

Person.prototype.greet= function(){
    console.log(`Welcome! ${this.name} Your age is ${this.age}`)
}

const obj1= new Person("Sanvi",21)
const obj2 = new Person("Shanu",19)
obj1.greet()
obj2.greet()