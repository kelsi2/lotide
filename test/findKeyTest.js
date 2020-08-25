const findKey = require("../findKey");
const assert = require("chai").assert;

const test = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

describe("#findKey", () => {
  it("should return noma for x => x.stars === 2", () => {
    assert.strictEqual(findKey(test, x => x.stars === 2), "noma");
  });
  it("should return Akaleri for x => x.stars === 3", () => {
    assert.strictEqual(findKey(test, x => x.stars === 3), "Akaleri");
  });
  it("should return Blue Hill for x => x.stars === 1", () => {
    assert.strictEqual(findKey(test, x => x.stars === 1), "Blue Hill");
  });
  it("should return undefined for x => x.stars === 0", () => {
    assert.isUndefined(findKey(test, x => x.stars === 0), undefined);
  });
});;