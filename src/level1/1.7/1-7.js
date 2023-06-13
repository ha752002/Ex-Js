
/**
 * Write a program that takes a list of strings as input and sorts the list in alphabetical order.
 * @param {array} list 
 * @returns the list Number of Arr in ascending order.
 */
function sortListAlphabetically(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return "Invalid input";
    }

    const sortedList = list.sort();
    return sortedList;
}

module.exports = sortListAlphabetically;