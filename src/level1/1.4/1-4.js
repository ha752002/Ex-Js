/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {numbers} numbers 
 * @returns displays the largest number in the list
 */
function maxNumber(numbers) {
    if (numbers.length === 0) {
        return "Invalid Input";
    } else {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];

            }
        }
        return max;
    }

}

module.exports = maxNumber;
