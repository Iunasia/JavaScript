const readlineSync = require('readline-sync');

function Square(Number){

    return Math.pow(Number,2);

};

    let Number = readlineSync.question("Enter Number: ");
    console.log("The square of " + Number +" is " + Square(Number));
