//Create two objects user1 and user2 with similar properties. Write a function compareObjects that
//  compares the properties of both objects. The function should log whether the objects are equal or not
//  based on their properties. Test the function with user1 and user2

let user1 = {
    Name: "Sanvi",
    Age: 21,
    city : "Ahmedabad"
}

let user2 = {
    Name: "Sanvi",
    Age: 21,
    city : "Ahmedabad"
}

function compareObjects(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        console.log("true")
    }
    else{
        console.log("false")
    }
}

compareObjects(user1,user2);