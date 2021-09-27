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

--Ex 2.3-

for (let i = 1; i <= 100; i++) {
    
    if (i % 2 == 0) {
        console.log (i);
    }
}

--Ex 2.4--

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) 
    console.log(i/2);
    
    else console.log(i*3);
}

--Ex 2.5--

let a = 0
while (a != 42) {
    a = readlineSync.question('Please enter your favorite number:');
    if (a != 42) console.log(`Are you sure?`);
    else console.log(`That's good`);
}

--Ex 2.6--

let i = new Number (readlineSync.question('Choose a number between 1 & 7:'));

if (i == 1) {
    console.log ('Monday')
}
else if (i == 2) {
    console.log ('Tuesday');
}
else if (i == 3) {
    console.log ('Wednesday');
}
else if (i == 4) {
    console.log ('Thursday');
}
else if (i == 5) {
    console.log ('Friday');
}
else if (i == 6) {
    console.log ('Saturday');
}
else if (i == 7) {
    console.log ('Sunday');
}
else if (i > 7) {
    console.log ('Too high, are you?');
}

--Ex 2.7--

n = new Number(readlineSync.question('Please enter a number'));
let a = 0

for (i=0;i!=n;i++) {
    a += new Number (readlineSync.question('Feed me a number!')); 
}

console.log (a)
*/
