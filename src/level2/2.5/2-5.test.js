const maximumSubarraySum = require('./2-5');

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(maximumSubarraySum([1, -2, 1, 1, -2, 1])).toBe(2);
});

test("The maximum sum of any contiguous subarray within the list", () => {
    expect(maximumSubarraySum([4, -1, -2, 1, 5])).toBe(7);
});

