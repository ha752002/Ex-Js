/**
 * Write a program that takes two numbers as inputs and displays their sum
 * @param {number} a 
 * @param {number} b 
 * @returns sum of a and b
 */
function sum(a, b) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input";
  }

  const numbers = arr.filter((num) => typeof num === 'number');

  if (numbers.length === 0) {
    return "Invalid input";
  }

  return a + b;
}

module.exports = sum;