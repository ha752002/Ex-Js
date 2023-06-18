
/**
 * Write a program that takes a string as input and displays the length of the string.
 * @param {*} string 
 * @returns length of the string
 */

function lengthStr(str) {
    if (typeof str === 'string') {
        return str.length;
    } else {
        return "Invalid input";
    }


}

module.exports = lengthStr;

