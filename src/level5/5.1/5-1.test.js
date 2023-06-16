const reverseArray = require("./5-1");

test('test1: ', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reverseArray(arr);
    expect(result).toEqual([5, 4, 3, 2, 1]);
});

test('test1: ', () => {
    const arr = ["Nguyen", "Thi", "Hong", "Ha"];
    const result = reverseArray(arr);
    expect(result).toEqual(["Ha", "Hong", "Thi", "Nguyen"]);
});

test('test1: ', () => {
    const arr = ["a", "b", "c", "d"];
    const result = reverseArray(arr);
    expect(result).toEqual(["d", "c", "b", "a"]);
});