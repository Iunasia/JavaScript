const readlineSync = require('readline-sync');

function SumArr(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    return sum;
}

let input = readlineSync.question("Enter numbers to sum: ");
let arr = input.trim() === '' ? [] : input.trim().split(/\s+/).map(Number);

console.log("The sum of the array is "+ SumArr(arr));