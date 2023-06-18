const switchOrder = require("./5-8");

test("Switch Order:", () => {
    expect(switchOrder(9, 1)).toEqual([{ id: 10, order: 0 }, { id: 9, order: 1 }, { id: 12, order: 2 }, { id: 11, order: 3 },]);
})


test("Switch Order:", () => {
    expect(switchOrder(10, 3)).toEqual([{ id: 11, order: 0 }, { id: 12, order: 1 }, { id: 9, order: 2 }, { id: 10, order: 3 },]);
})

test("Switch Order:", () => {
    expect(switchOrder(9, 5)).toEqual([{ id: 9, order: 0 }, { id: 12, order: 1 }, { id: 10, order: 2 }, { id: 11, order: 3 },]);
})


test("Switch Order:", () => {
    expect(switchOrder(11, 2)).toEqual([{ id: 10, order: 0 }, { id: 12, order: 1 }, { id: 11, order: 2 }, { id: 9, order: 3 },]);
})
