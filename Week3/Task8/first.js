const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('source.txt', 'utf8'); // Synchronous file read
console.log("File content:", data);

setTimeout(() => console.log("Timeout callback"), 0);
setImmediate(() => console.log("Immediate callback"));

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
