
/**
 * 
 * @param {array[numbers]} arr 
 * @returns the list Number of Arr in ascending order.
 */
function SortListAscending(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid input";
    } else {
        arr.sort((a, b) => a - b);
        return arr;
    }
}

module.exports = SortListAscending;