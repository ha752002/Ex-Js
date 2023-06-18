
/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {*} strings 
 * @returns displays the shortest string in the list
 */
function smallString(arr) {
    let shortestString = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortestString.length) {
            shortestString = arr[i];
        }
    }

    return shortestString;
}


module.exports = smallString;