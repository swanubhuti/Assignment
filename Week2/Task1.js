//Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function

function multiplication(num1){
    return function(num2){
        return num1*num2

    }

}
const multiplyBy2 = new multiplication(2)

console.log(multiplyBy2(58));
console.log(multiplyBy2(20));

//By using bind

function product(num1,num2){
    return num1*num2;
}

const multiply2 = product.bind(null,2)
console.log(multiply2(40));
console.log(multiply2(5));