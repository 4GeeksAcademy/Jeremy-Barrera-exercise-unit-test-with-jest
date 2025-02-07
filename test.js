const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test("One dollar should be 146.26 Japan yen", () => {
    let expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 2);
});

test("500 Japan yen should be 2.78 pounds", () => {
    let expected = (500 / 156.5) * 0.87;
    expect(fromYenToPound(500)).toBeCloseTo(expected, 2);
});
