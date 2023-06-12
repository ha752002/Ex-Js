
/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {arr} array 
 * @returns displays the largest number in the list
 */
function maxNumber(arr) {
    if ((Array.isArray(arr)) && (arr.length > 0)) {
        return Math.max(...arr);
    } else {
        return "Invalid input";
    }
}

module.exports = maxNumber;
