const readlinesync = require('readline-sync');

function isShortsWeather(Temperature){
    return Temperature >= 35;
}

let Temperature = readlinesync.question("Enter Temperature: ");
console.log(isShortsWeather(Temperature));
