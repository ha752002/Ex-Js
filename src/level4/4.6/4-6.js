/**
 * Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list.
 * @param {*} nums 
 * @returns the maximum product of any three distinct elements in the list
 */

function findMaxProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const product1 = nums[0] * nums[1] * nums[n - 1];

    const product2 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    return Math.max(product1, product2);
}

module.exports = findMaxProduct;
