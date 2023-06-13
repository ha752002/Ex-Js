const SortListAscending = require('./1-6');

test('Sorts an array numbers in ascending order', () => {
    const arr = [5, -1, 8, 2, 6];
    const sortedArr = SortListAscending(arr);
    expect(sortedArr).toEqual([-1, 2, 5, 6, 8]);
});

test('SortListAscending with empty array', () => {
    const arr = [];
    const sortedArr = SortListAscending(arr);
    expect(sortedArr).toEqual("Invalid input");
});

test('SortListAscending with empty array', () => {
    const arr = "not an array";
    const sortedArr = SortListAscending(arr);
    expect(sortedArr).toEqual("Invalid input");
});