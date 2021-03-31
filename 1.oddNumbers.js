// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var oddAnonymous = function(n, arr) {
  var result = "";
  for(var i=0; i<n; i++) {
    if(arr[i]%2!==0)
      result+=arr[i]+" ";
  }
  console.log("Using Anonymous function:");
  console.log(result.trim());
}

inp.on("close", () => {
  var n = parseInt(userInput[0]);
  var arr = userInput[1].split(' ').
    map(x=>Number(x));
  (function(size, input){
    var result = "";
    for(var i=0; i<size; i++) {
      if(arr[i]%2!==0)
        result+=input[i]+" ";
    }
    console.log("Using IIFE:");
    console.log(result.trim());
  })(n, arr);
  oddAnonymous(n, arr);
});

// Example:
// input:
// 5
// 12 3 5 6 7

// output:
// Using IIFE:
// 3 5 7
// Using Anonymous function:
// 3 5 7