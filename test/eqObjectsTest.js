const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};

describe("#eqObjects", () => {
  it("should return true", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("should return true", () => {
    assert.notStrictEqual(eqObjects(cd, dc), true);
  });

  it("should return false", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});

// true

// const abc = {a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab, abc)); // false

// 
// console.log(eqObjects(cd, dc)); // => true

// 
// console.log(eqObjects(cd, cd2)); // => false