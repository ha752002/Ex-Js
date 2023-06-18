const findLargestOverlap = require("./4-10");

test("test 1:", () => {
    expect(
        findLargestOverlap(["abcd", "cdef", "efgh"], 2)
    ).toEqual(["abcd", "cdef"]);
});

test("test 2 :", () => {
    expect(
        findLargestOverlap(["abcde", "cdefg", "efghi", "ghijk"], 3)
    ).toEqual(["abcde", "cdefg"]);
});


test("test 3:", () => {
    expect(
        findLargestOverlap(["abcd", "cdefg", "efgh", "ghij"], 2)
    ).toEqual(["abcd", "cdefg"]);
});