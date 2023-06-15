/**
 * Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {*} numbers 
 * @returns the smallest positive integer that cannot be represented as the sum of any subset of the list
 */
function findSmallestPositiveInteger(numbers) {
    numbers.sort((a, b) => a - b);
    let smallestPositive = 1; // khởi tạo số nguyên dương nhỏ nhất = 1

    for (let i = 0; i < numbers.length; i++) {
        // thì chúng ta có thể tạo ra các số từ 1 đến (smallestPositive + num - 1)
        if (numbers[i] <= smallestPositive) {
            smallestPositive += numbers[i];
        } else {
            break;
        }
    }

    return smallestPositive;
}

module.exports = findSmallestPositiveInteger;