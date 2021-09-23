const readlineSync = require("readline-sync");


/*
--Ex 2.1--
let age = readlineSync.question('What is you age?');

if (age <= 18) {
   
    console.log ("You are a child!");
}

else {
    console.log ("You are an adult!")
} 

--Ex 2.2--

let minAge = readlineSync.question('Enter a minimum Age?');
let maxAge = readlineSync.question('Enter a maximum Age?');

if (minAge>maxAge) {
    console.log ("Please enter a correct min and max age");
    return;
}

let age = readlineSync.question('What is you age?');

if ((minAge <= age) && (age <= maxAge)) {
    console.log("Good Job!");
}
*/

for (let i = 1; i <= 100; i++) {
    
    if (i % 2 == 0) {
        console.log (i);
    }
}

while (i = 1; i<=50; i++) {
    if (i % 2 == 0) {
        console.log (i)
    }
} 