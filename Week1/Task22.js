//Create an object called student with properties name, age, and an array grades. Add a method named 
// calculateAverage to the object, which calculates and returns the average of the grades. 
// Iterate through the object properties using a loop and log each property and its value. 
// Call the calculateAverage method and log the result.

let student = {
    Name: "Sanvi",
    age: 21,
    grades: [60,70,90,50,80,30],
    calculateAverage : function(){
        let sum =this.grades.reduce((acc,curr)=>acc=acc+curr,0)
        let avg = sum/this.grades.length
        console.log("Average: ",avg)

    }
}
for (let key in student) {
    if (typeof student[key] !== "function") {
        console.log(`${key}: ${student[key]}`);
    }
}

student.calculateAverage()