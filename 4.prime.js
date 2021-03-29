// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var primeAnonymous = function(size, input) {
    var res = "";
    for(var i=0; i<size; i++){
        var val = input[i];
        if(val===0 || val===1)
            continue;
            
        var flag = 1;
        for(var j=2; j<=Math.sqrt(input[i]); j++){
            if(input[i]%j===0){
                flag=0;
                break;
            }
        }
        if(val!==0 && val!==1)
        if(flag===1)
            res+=input[i]+" ";
    }
    console.log(res);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr = userInput[1].split(' ')
        .map(x=>Number(x));
    
    console.log("Using IIFE");
    (function(size, input){
        var res = "";
        var flag;
        for(var i=0; i<size; i++){
            var val = input[i];
            if(val===0 || val===1)
            continue;
            
            flag = 1;
            for(var j=2; j<=Math.sqrt(input[i]); j++){
                if(input[i]%j===0 || input[i]===1 || input[i]===0){
                    flag=0;
                    break;
                }
            }
            if(flag===1)
                res+=input[i]+" ";
        }
        console.log(res);
    })(n, arr);
    
    console.log("Using Anonymous function:");
    primeAnonymous(n, arr);
});

// Example:
// input:
// 7
// 0 1 2 4 6 9 11

// output:
// Using IIFE
// 2 11 
// Using Anonymous function:
// 2 11 