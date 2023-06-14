
/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {arr[numbers]} numbers 
 * @returns  the sum of the numbers that are divisible by both 3 and 5.
 */
function theSumNumber(numbers) {
    let sum = 0;
    numbers.forEach(a => {
        if ((a % 3 == 0) && (a % 5 == 0)) {
            sum += a;
        }
    });

    return sum;
}

module.exports = theSumNumber;