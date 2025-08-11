const readlinesync = require('readline-sync');


function Multiply(num1,num2){
    return num1*num2;
}

let num1 = readlinesync.question("Enter First Number: ");
let num2 = readlinesync.question("Enter Secod Number: ");

console.log(Multiply(num1,num2));