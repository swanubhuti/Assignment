//Create an object called originalPerson with properties name, age, and an array hobbies. 
// Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson and 
// deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects the original
//  object. Log the properties of all three objects. 


let originalPerson = {
    name: "Sanvi",
    age: 25,
    hobbies: ["Reading", "Traveling", "Coding"]
};

let shallowCopyPerson = Object.assign({},originalPerson)
shallowCopyPerson.age = 22
shallowCopyPerson.hobbies.push("Dancing");// original change

let deepCopyPerson = JSON.parse(JSON.stringify(originalPerson))

deepCopyPerson.age=23
deepCopyPerson.hobbies.push( "playing"); //original not change

console.log("original: " ,originalPerson)

console.log("shallow: ",shallowCopyPerson);

console.log("deep: " ,deepCopyPerson);