const fs = require('fs');

console.log("Start");

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});

setTimeout(() => console.log("Timeout callback"), 0);
setImmediate(() => console.log("Immediate callback"));

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
