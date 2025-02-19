//Create two objects named originalObject and modifiedObject. Assign the same properties to both objects.
//  Modify one property in modifiedObject and observe how it affects the other object due to reference.
//  Log the properties of both objects to the console.

let originalObject= {

    Name: "Sanvi",
    Age: 21,
    city : "Ahmedabad"

}

let modifiedObject = originalObject

modifiedObject.city="gandhinagar"

console.log(originalObject);
console.log(modifiedObject);