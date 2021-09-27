

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Gives a number between 1 and 10
 * @author Frédéric Van Overmeire
 */
function rand10() {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

console.log (rand10())