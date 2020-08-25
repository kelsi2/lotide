const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("should count the letters in a string", () => {
    const actual = "Lighthouse";
    const expected = {e: 1, g: 1, h: 2, i: 1, L: 1, o: 1, s: 1, t: 1, u: 1};

    assert.deepEqual(countLetters(actual), expected);
  });

  it("should return an empty object if no input given", () => {
    assert.deepEqual(countLetters(""), {});
  });
});