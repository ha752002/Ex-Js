const findCombinedListMedian = require('./3-6');


test('Find combined list median - Example 1', () => {
    const list1 = [1, 2, 3];
    const list2 = [4, 5, 6];
    const result = findCombinedListMedian(list1, list2);
    expect(result).toBe(3.5);
});

test('Find combined list median - Example 2', () => {
    const list1 = [1, 3, 5, 7];
    const list2 = [2, 4, 6, 8];
    const result = findCombinedListMedian(list1, list2);
    expect(result).toBe(4.5);
});

test('Find combined list median - Empty lists', () => {
    const list1 = [];
    const list2 = [];
    const result = findCombinedListMedian(list1, list2);
    expect(result).toBe("Invalid input");
});
