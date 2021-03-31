// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var rotateAnonymous = function(size, input, rot) {
    var output = new Array(size);
    for(var i=0; i<size; i++)
        output[(i+rot)%size] = input[i];
    console.log(output);
}

inp.on("close", () => {
    var [n, k] = userInput[0].split(' ')
        .map(x=>Number(x));
    var arr = userInput[1].split(' ')
        .map(x=>Number(x)); 
    // console.log(n, k);
    
    console.log("Using IIFE");
    (function(size, input, rot){
        var output = new Array(size);
        for(var i=0; i<size; i++)
            output[(i+rot)%size] = input[i];
        console.log(output);
    })(n, arr, k);
    
    console.log("Using Anonymous function:");
    rotateAnonymous(n, arr, k);
});

// Example:
// input:
// 5 3
// 1 2 3 4 5

// output:
// Using IIFE
// [ 3, 4, 5, 1, 2 ]
// Using Anonymous function:
// [ 3, 4, 5, 1, 2 ]

