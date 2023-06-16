
/**
 * Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {*} nums 
 * @param {*} target 
 * @returns the number of distinct subsequences of the list that sum up to a target value
 */
function countDistinct(nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[target];
}

module.exports = countDistinct;
