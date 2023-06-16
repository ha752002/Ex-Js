const countDistinct = require("./4-2");

test('the number of distinct subsequences of the list that sum up to a target value', () => {
    const nums1 = [1, 2, 3, 4, 5];
    const target1 = 5;
    expect(countDistinct(nums1, target1)).toBe(2);
});