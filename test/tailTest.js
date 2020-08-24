const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['ne'] for ['one']", () => {
    assert.deepEqual(tail('one'), 'ne');
  });
  it("returns ['index0', 'index1', 'index2'] for ['index0', 'index1', 'index2']", () => {
    assert.deepEqual(tail(['index0', 'index1', 'index2']), ['index1', 'index2']);
  });
  it("does not return ['one'] when given ['one', 'two']", () => {
    assert.notDeepEqual(tail(['one']), ['two']);
  });
});