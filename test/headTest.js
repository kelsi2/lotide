const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'Hello' for ['Hello']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns [] when undefined", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("does not return '3' when given ['1']", () => {
    assert.notEqual(head(['1']), 3);
  });
});