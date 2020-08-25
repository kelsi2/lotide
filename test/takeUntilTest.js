const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("should return [1, 2, 5, 7, 2] for data, x => x < 0", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("should return ['I\'ve', 'been', 'to', 'Hollywood'] for data, x => x === ','", () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});;