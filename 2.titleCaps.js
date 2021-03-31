// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var capsAnonymous = function(size, input) {
    for(var i=0; i<size; i++){
        input[i] = input[i].toUpperCase();
    }
    console.log(input);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr = userInput[1].split(' ');
    
    console.log("Using IIFE");
    (function(size, input){
        for(var i=0; i<size; i++){
            input[i] = input[i].toUpperCase();
        }
        console.log(input);
    })(n, arr);
    
    console.log("Using Anonymous function:");
    capsAnonymous(n, arr);
});

// Example:
// input:
// 4
// abc def ghi jhl

// output:
// Using IIFE
// [ 'ABC', 'DEF', 'GHI', 'JHL' ]
// Using Anonymous function:
// [ 'ABC', 'DEF', 'GHI', 'JHL' ]