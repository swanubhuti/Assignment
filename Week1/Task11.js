//Write a JavaScript program that uses the map function to transform an array of numbers. Square each element in
//  the array and create a new array with the squared values. Print both the original and transformed arrays.
// 
let numArr = [1,2,4,5,6,8]

let newArr = numArr.map(a => a*2)

//transform Array
console.log(newArr);

//actual array
console.log(numArr);