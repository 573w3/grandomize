const names = require("./names");
const english = require("./languages").english;

describe("firstNames()", () => {
  test("Generate correct number of names", () => {
    const count = 1000;
    let randomNames = names.firstNames(english, count);
    expect(randomNames.length).toEqual(count);
  });
});

describe("firstNames()", () => {
  test("Random names are strings", () => {
    const count = 1000;
    let randomNames = names.firstNames(english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomNames[i] === "string").toBe(true);
    }
  });
});
