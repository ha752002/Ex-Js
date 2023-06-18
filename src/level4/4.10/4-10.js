/**
 * Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
 * @param {*} strings 
 * @param {*} k 
 * @returns the two strings with the largest overlap of substrings,
 */

function findLargestOverlap(strings, k) {
    let largestOverlap = 0;
    let largestStrings = [];

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            const overlap = getOverlap(strings[i], strings[j], k);
            if (overlap > largestOverlap) {
                largestOverlap = overlap;
                largestStrings = [strings[i], strings[j]];
            }
        }
    }

    return largestStrings;
}

function getOverlap(str1, str2, k) {
    let overlap = 0;

    for (let i = 0; i <= str1.length - k; i++) {
        const substr = str1.substring(i, i + k);
        if (str2.includes(substr)) {
            overlap = Math.max(overlap, k);
        }
    }

    return overlap;
}
module.exports = findLargestOverlap;