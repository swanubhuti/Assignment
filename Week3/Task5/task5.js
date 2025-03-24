const fs = require('fs')
const path = require('path')

const sourcePath = path.join(__dirname , 'source.txt')
const destinationPath = path.join(__dirname , 'destination.txt')

//Sync
const readData = fs.readFileSync(sourcePath,'utf-8')
console.log(readData)

const writeData = fs.writeFileSync(destinationPath,readData)

//Async
fs.readFile(sourcePath, 'utf8', (err, readData) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Asynchronous Read:\n", readData);
    fs.writeFile(destinationPath, readData, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error(writeErr.message);
        } else {
            console.log("Data written to destination.txt (async)");
        }
    });
});