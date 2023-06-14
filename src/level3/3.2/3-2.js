/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {arr[numbers]} numbers 
 * @returns the maximum difference between any two elements in the list.
 */

function findMaxDifference(numbers) {
    if (numbers.length < 2 || !Array.isArray(numbers)) {
        return "Invalid input";
    } else {
        const sortedNumbers = numbers.slice().sort((a, b) => a - b);
        const maxDifference = sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
        return maxDifference;
    }
}

module.exports = findMaxDifference;