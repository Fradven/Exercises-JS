const readlineSync = require("readline-sync");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Gives a number between 1 and 10
 * @author Frédéric Van Overmeire
 */
function rand10() {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

/**
 * Input a number to get an array of random number
 * @author Frédéric Van Overmeire
 * @param {Array} n 
 */
function multiRand(n) {
    var n = Array.from({length: i}, () => Math.floor(rand10()));
    console.log (n)
}

let i = readlineSync.question('Please enter a number: ')

multiRand()