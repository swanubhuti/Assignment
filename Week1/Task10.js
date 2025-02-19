/*Develop a script that uses an array to store the days of the week. Use array methods such as push, pop, shift,
 or unshift to modify the array. Print the array after each modification. Additionally, 
 use the indexOf method to find the index of a specific day.*/

 let arr =["Monday", "Tuesday","Wednesday","Thursday"];

 arr.push("Friday");
 console.log(arr)
 arr.push("Sunday");
 console.log(arr)

 arr.push("Saturday");
 console.log(arr)

 arr.shift();
 console.log(arr)

 arr.unshift("Monday");
 console.log(arr)

 arr.pop();
 console.log(arr)
 arr.pop();
 console.log(arr)

 arr.push("Saturday");
 arr.push("Sunday");

 console.log(arr)

 console.log(arr.indexOf("Tuesday"))