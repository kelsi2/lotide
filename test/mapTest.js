const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("should return ['g', 'c', 't', 'm', 't'] for 'words, word => word[0]'", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("should return ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'] for 'words, word => word.toUpperCase()'", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
  it("should return ['ground is found in the words array!', 'control is found in the words array!', 'to is found in the words array!', 'major is found in the words array!', 'tom is found in the words array!'] for 'words, word => `${word} is found in the words array!'", () => {
    assert.deepEqual(map(words, word => `${word} is found in the words array!`), ['ground is found in the words array!', 'control is found in the words array!', 'to is found in the words array!', 'major is found in the words array!', 'tom is found in the words array!']);
  });
});