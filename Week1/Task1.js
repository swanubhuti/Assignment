let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(`Checking number: ${arr[i]}`);

    if (arr[i] === 3) {
        console.log("Skipping 3 using continue.");
        continue; 
    }

    console.log(`Processing number: ${arr[i]}`);

    if (arr[i] > 5) {
        console.log("Number greater than 5 Loop end");
        break; 
    }
}

