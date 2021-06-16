const randomizer = require("./randomizer").genericRandomizer;
const languages = require("./languages");
const streets = require("../assets/streets.json");
const cities = require("../assets/cities.json");

describe("genericRandomizer()", () => {
  test("Generate correct number of items", () => {
    const count = 1000;
    const randomItems = randomizer(streets, languages.english, count);
    expect(randomItems.length).toEqual(count);
  });
});

describe("genericRandomizer()", () => {
  test("Random items are strings", () => {
    const count = 1000;
    let randomItems = randomizer(cities, languages.english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomItems[i] === "string").toBe(true);
    }
  });
});

describe("genericRandomizer()", () => {
  test("Generate items of all languages", () => {
    let success = false;
    for (const key in languages) {
      success = true;
      let randomItems = randomizer(cities, languages[key]);
      expect(typeof randomItems[0] === "string").toBe(true);
    }
    expect(success).toEqual(true);
  });
});
