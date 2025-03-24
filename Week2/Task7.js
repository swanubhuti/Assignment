
function Operation(array, callback) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }x
  
  return result;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const doubled = Operation(numbers, function(num) {
  return num * 2;
});
console.log(doubled);