const uniqArray = require("./5-3");

test("The uniq array1", () => {
    expect(uniqArray([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});

test("The uniq array2", () => {
    expect(uniqArray(["a", "b", "c", "b", "d", "a", "e", "c"])).toEqual(["a", "b", "c", "d", "e"]);
});

test("The uniq ", () => {
    expect(uniqArray([true, false, true, true, false])).toEqual([true, false]);
});

test("The uniq empty", () => {
    expect(uniqArray([])).toEqual([]);
});
