const readlinesync = require('readline-sync');

function SnakeEyes(input1, input2){
    if(input1 == 1 && input2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes");
    }
}

let input1 = readlinesync.question("Enter Input 1: ");
let input2 = readlinesync.question("Enter Input 2: ");

SnakeEyes(input1, input2);
