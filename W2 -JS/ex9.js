const readlineSync = require('readline-sync');


    const greet = (Name) => {
    console.log("Hey " + Name + '!');
    }

        let Name = readlineSync.question("Enter Your Name: ");
        greet(Name);


    
