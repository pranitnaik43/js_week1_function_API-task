const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var sumAnonymous = function(size, input) {
    var sum = 0;
    for(var i=0; i<size; i++){
        sum+=input[i];
    }
    console.log(sum);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr = userInput[1].split(' ')
        .map(x=>Number(x));
    
    console.log("Using IIFE");
    (function(size, input){
        var sum = 0;
        for(var i=0; i<size; i++){
            sum+=input[i];
        }
        console.log(sum);
    })(n, arr);
    
    console.log("Using Anonymous function:");
    sumAnonymous(n, arr);
});

// Example:
// input:
// 5
// 1 2 3 4 5

// output:
// Using IIFE
// 15
// Using Anonymous function:
// 15