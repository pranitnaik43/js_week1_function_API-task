// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function mySort(arr1, arr2, size) {
    var arr3 = [];
    var i=0, j=0;
    while(i<size && j<size){
        if(arr1[i]<arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    while(i<size){
        arr3.push(arr1[i]);
        i++;
    }
    while(j<size){
        arr3.push(arr2[j]);
        j++;
    }
    return arr3;
}

var medianAnonymous = function(size, input) {
    var a = size/2;
    var median = (input[a] + input[a-1])/2;
    console.log("Median: ", median);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr1 = userInput[1].split(' ').map(x=>Number(x));
    var arr2 = userInput[2].split(' ').map(x=>Number(x));
    var arr3 = mySort(arr1, arr2, n)
    // console.log(arr3);
    console.log("Using IIFE");
    (function(size, input){
        var a = size/2;
        var median = (input[a] + input[a-1])/2;
        console.log("Median: ", median);
    })(n*2, arr3);
    
    console.log("Using Anonymous function:");
    medianAnonymous(n*2, arr3);
});

// Example:
// input:
// 4
// 4 8 9 12
// 5 7 10 13

// output:
// Using IIFE
// Median:  8.5
// Using Anonymous function:
// Median:  8.5