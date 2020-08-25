const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return true for ('hello').e, [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return false for ('lighthouse').e, [5])", () => {
    assert.notDeepEqual(letterPositions("lighthouse").e, [5]);
  });
  it("should return true for ('lighthouse in the house').i, [1, 11])", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });
});