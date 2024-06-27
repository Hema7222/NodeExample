const fs = require("fs");
const data = fs.readFileSync('input.txt');

//Blocking the code
console.log(data.toString());
console.log("Program Ended");