/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {*} list1 
 * @param {*} list2 
 * @returns returns the median of the combined list
 */
function findCombinedListMedian(list1, list2) {
    if (!Array.isArray(list1) || !Array.isArray(list2)) {
        return "Invalid input";
    }

    const combinedList = [...list1, ...list2];
    const sortedList = combinedList.sort((a, b) => a - b);
    const length = sortedList.length;

    if (length === 0) {
        return "Invalid input";
    } else if (length % 2 === 1) {
        const middleIndex = Math.floor(length / 2);
        return sortedList[middleIndex];
    } else {
        const middleIndex1 = length / 2 - 1;
        const middleIndex2 = length / 2;
        const median = (sortedList[middleIndex1] + sortedList[middleIndex2]) / 2;
        return median;
    }
}

module.exports = findCombinedListMedian;