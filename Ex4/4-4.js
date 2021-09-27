const readlineSync = require("readline-sync");




/**
 * Gives a number between 1 and 10
 * @author Frédéric Van Overmeire
 */
function rand10() {
    return Math.floor((Math.random()*10)+1);
}

/**
 * Input a number to get an array of random number
 * @author Frédéric Van Overmeire
 * @param {Array} n 
 */
function multiRand(n) {
    var n = Array.from({length: b}, () => Math.floor(rand10()));
    return n;
}

let b = readlineSync.question('Please enter a number: ')

/**
 * Calculate the average of a given array
 * @author Frédéric
 * @param {array} arr 
 * @returns average
 */
function average(arr) {
    let a = 0;
    for (i=0; i != arr.length; i++) {
    a += arr[i] ;
}
    return a / arr.length;
}

/**
 * Gives the minimum of an array
 * @author Frédéric
 * @param {array} arr 
 * @returns minimum
 */
function min(arr) {
    return Math.min (...arr)
    
}

/**
 * Gives the maximum of an array
 * @author Frédéric
 * @param {array} arr 
 * @returns maximum
 */
function max(arr) {
    return Math.max (...arr)
}

let myArr = multiRand(b);


console.log(`Your array is : [${myArr}]`);
console.log(`The average is : ${average(myArr)}`);
console.log(`The minimum is : ${min(myArr)}`);
console.log(`The maximum is : ${max(myArr)}`);