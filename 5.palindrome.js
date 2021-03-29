// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

var palindromeAnonymous = function(size, input) {
    var res = "";
    input.forEach((str)=>{
        var len = str.length;
        var flag=1;
        for(var i=0; i<len/2; i++) {
            if(str[i]!==str[len-i-1]){
                flag = 0;
                break;
            }
        }
        if(flag===1)
            res+=str+" ";
    });
    console.log(res);
}

inp.on("close", () => {
    var n = parseInt(userInput[0]);
    var arr = userInput[1].split(' ');
    
    palindromeAnonymous(n, arr);
});

// Example:
// input:
// 7
// abba abbc abcba abcbc abccba abcdcba abcdbac

// output:
// abba abcba abccba abcdcba 