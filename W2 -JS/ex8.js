const readlineSync = require('readline-sync');

   const DayOfTheWeek = {
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
        7:"Sunday"
   };

    function ReturnDay(x){

        if(x < 1 || x > 7 || isNaN(x)){
            console.log("Invalid Number")
        } else {
            console.log(DayOfTheWeek[x])
        }
    
    };

    let x = readlineSync.question("Enter Number: ");
    ReturnDay(x);