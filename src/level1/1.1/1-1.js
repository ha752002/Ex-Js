/**
 * Write a program that takes two numbers as inputs and displays their sum
 * @param {number} a 
 * @param {number} b 
 * @returns sum of a and b
 */
function sum(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Invalid input";
  } else {
    return a + b;
  }
}

module.exports = sum;