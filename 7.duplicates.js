// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var duplicatesAnonymous = function(size, input) {
    var output = [];
    var flag;
    for(var i=0; i<size; i++){
        flag = 1;
        for(var j=0; j<output.length; j++){
            if(output[j]===input[i]) {
                flag=0;
                break;
            }
        }
        if(flag===1)
            output.push(input[i]);
    }
    console.log(output);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr = userInput[1].split(' ').map(x=>Number(x));
    
    console.log("Using IIFE");
    (function(size, input){
        var output = [];
        var flag;
        for(var i=0; i<size; i++){
            flag = 1;
            for(var j=0; j<output.length; j++){
                if(output[j]===input[i]) {
                    flag=0;
                    break;
                }
            }
            if(flag===1)
                output.push(input[i]);
        }
        console.log(output);
    })(n, arr);
    
    console.log("Using Anonymous function:");
    duplicatesAnonymous(n, arr);
});

// Example:
// input:
// 10
// 1 2 2 3 3 3 4 5 5 6

// output:
// Using IIFE
// [ 1, 2, 3, 4, 5, 6 ]
// Using Anonymous function:
// [ 1, 2, 3, 4, 5, 6 ]

