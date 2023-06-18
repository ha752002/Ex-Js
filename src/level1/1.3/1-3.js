/**
 * Write a program that takes a number as input and displays its square.
 * @param {*} a 
 * @returns result Area of ​​the rectangle
 */
function areaSquare(a) {
    if (a > 0 && typeof a === "number") {
        return a * a;
    } else {
        return "Invalid input";
    }
}

module.exports = areaSquare;

