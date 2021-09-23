const readlineSync = require("readline-sync");
/*
--Ex 1.2--
let name = "Kolt";
let firstname = "Lmg";
let city = "London";

console.log("Your name is "+name+" "+firstname+" and you live in "+city);

--Ex 1.3--
let userName = readlineSync.question('Can you give me your firstname please?');

console.log("Hello " + userName);
--Ex 1.4--
let name = readlineSync.question('Can you give me your name please?');
let firstname = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('Can you give me your city please?');

console.log ("Your name is "+name+" "+firstname+" and you live in "+city);


--Ex 1.5--

let num1 = Math.trunc(readlineSync.question('decimal numb?'));

let num2 = new Number(readlineSync.question('decimal numb?'));

let total = num1 * num2;

console.log(total);
*/
let num1 = Math.trunc(readlineSync.question('Integer numb?'));

let num2 = Math.trunc(readlineSync.question('Integer numb?'));

let total = num1 / num2;

console.log(total);
