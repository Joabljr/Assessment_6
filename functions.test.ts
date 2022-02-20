const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("returns an array with the same length as the argument", () => {
    expect(shuffleArray([1, 2, 3, 4, 5])).toHaveLength(5);
  });
  test("returns an array", () => {
    expect(Array.isArray(shuffleArray([1, 2, 3, 4, 5]))).toBe(true);
  });
});
