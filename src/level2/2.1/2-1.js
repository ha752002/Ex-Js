
/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {*} numbers 
 * @returns the second largest number in the list
 */
function SecondLargest(numbers) {
    if (numbers.length < 2 || !Array.isArray(numbers)) {
        return "Invalid input";
    } else {
        numbers.sort((a, b) => b - a);
        return numbers[1];
    }
}

module.exports = SecondLargest;