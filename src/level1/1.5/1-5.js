
/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list.
 * @param {*} strings 
 * @returns displays the shortest string in the list
 */

function findShortestString(strings) {
    if (strings.length === 0) {
        return undefined;
    }

    let shortestString = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortestString.length) {
            shortestString = strings[i];
        }
    }
    return shortestString;
}

module.exports = findShortestString;