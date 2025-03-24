/*Create program of which required map, filter chaining, and after that replace that with reduce
Ex. 
const students = [
{ name: 'jeel', age: 21 },
{ name: 'franklin', age: 25 },
{ name: 'vivek', age: 26 },
{ name: 'hardik', age: 23 },
]

create array of name of student  whose age is greater than 18*/

const students = [
    { name: 'jeel', age: 21 },
    { name: 'franklin', age: 25 },
    { name: 'vivek', age: 26 },
    { name: 'hardik', age: 13 },
    ]

const newStudents = students.filter((students)=>students.age>18).map((x)=> x.name);
console.log(newStudents);