const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns an empty array when given one value", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array when given two values", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns the middle value when given three values", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns the middle value when given five values", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns the middle two values when given four values", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns the middle two values when given six values", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});



// -------------TEST CASES------------------

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// const words = ["hello", "world", "lighthouse"];
// middle(words, ["world"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);