const randomize = require("./randomizer").randomize;
const languages = require("./languages");
const streets = require("./assetLoader").nativeAssets.streets;
const cities = require("./assetLoader").nativeAssets.cities;

describe("randomize()", () => {
  test("Generate correct number of items", () => {
    const count = 1000;
    const randomItems = randomize(streets, [languages.english], count);
    expect(randomItems.length).toEqual(count);
  });
});

describe("randomize()", () => {
  test("Random items are strings", () => {
    const count = 1000;
    let randomItems = randomize(cities, [languages.english], count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomItems[i] === "string").toBe(true);
    }
  });
});

describe("randomize()", () => {
  test("Generate items of all languages", () => {
    let success = false;
    for (const key in languages) {
      success = true;
      let randomItems = randomize(cities, [languages[key]]);
      expect(typeof randomItems[0] === "string").toBe(true);
    }
    expect(success).toEqual(true);
  });
});

describe("randomize()", () => {
  test("Generate items from deeply nested asset", () => {
    const count = 100;
    const asset = { a: { b: { c: { d: ["1", "2", "3"] } } } };
    let randomItems = randomize(asset, ["a", "b", "c", "d"], count);
    expect(randomItems.length).toEqual(count);
  });
});
