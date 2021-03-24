// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var n = parseInt(userInput[0]);
  var arr = userInput[1].split(' ').
    map(x=>Number(x));
  var result = "";
  for(var i=0; i<n; i++) {
    if(arr[i]%2!==0)
      result+=arr[i]+" ";
  }
  console.log(result.trim());
});

// Example:
// input:
// 5
// 12 3 5 6 7

// output:
// 3 5 7
