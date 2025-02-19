//Develop a script that employs the reduce function to find the sum of all elements in an array. 
// Print the original array and the final sum.

let numArr = [1,2,4,5,6,8];

let reduceArr = numArr.reduce((acc,curr)=> acc= curr+acc, 0)

//actual array
console.log(numArr);

//sum of array
console.log("The some of the array elements is: " +reduceArr)