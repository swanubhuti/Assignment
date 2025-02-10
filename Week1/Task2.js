let arr = ["The", "bird", "lives", "in","the","santuries"];

let i=0;
while (i<arr.length){
    let currstring = arr[i];
    if (currstring.length >8){
        console.log(`"${currstring}" exceeds 8 characters. Stopping loop.`);
        break;
    }
   [arr[i]].forEach(word =>{
       console.log(word + "!");
   });
   i++;
}


//The while loop controls when to stop iterating (based on string length).
//The forEach method prints all words with ! before stopping.


    