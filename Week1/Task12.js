//Create a program that utilizes the filter function to extract even numbers from an array of integers. 
// Print the original array and the filtered array containing only even numbers.

let numArr = [1,2,4,5,6,8]

let filterArr= numArr.filter(x=> x%2===0)

//actual array
console.log(numArr);

//Filtered array
console.log(filterArr)