/**
 * Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
 * @param {*} nums 
 * @returns the maximum sum of any contiguous subarray within the list
 */
function maximumSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);

    }
    return maxSum;

}

module.exports = maximumSubarraySum;