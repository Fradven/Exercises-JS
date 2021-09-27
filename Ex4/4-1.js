


const readlineSync = require("readline-sync");

a = readlineSync.question  ('Give us a length: ');
b = readlineSync.question  ('Give us a a width: ');

/**
 * calculate the surface of a rectangle
 * @author Frédéric Van Overmeire
 */
function calcSurface (a, b) {
    return a * b;
    
}
console.log ('The surface of the rectangle is '+ calcSurface(a, b));
