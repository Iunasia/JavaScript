const readlineSync = require('readline-sync');

function LastElement(arr){
    if (arr.length === 0){
        return null;
    }
    return arr[arr.length - 1]
} 


let input = readlineSync.question("Enter numbers separated by spaces: ");
let arr = input.trim() === '' ? [] : input.trim().split(/\s+/).map(Number);

console.log(LastElement(arr));


