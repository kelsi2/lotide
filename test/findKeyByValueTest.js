const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("should equal true when the tv show matches the genre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined when tv show is not defined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("should return false when tv show and genre don't match", () => {
    assert.notStrictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
  });
});;


// assertEqual; //PASS
// assertEqual, undefined); //PASS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); //FAIL
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci-fi"); //FAIL