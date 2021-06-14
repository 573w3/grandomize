const names = require("./names");
const english = require("./languages").english;

// first
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

// last
describe("lastNames()", () => {
  test("Generate correct number of names", () => {
    const count = 1000;
    let randomNames = names.lastNames(english, count);
    expect(randomNames.length).toEqual(count);
  });
});

describe("lastNames()", () => {
  test("Generated names are strings", () => {
    const count = 1000;
    let randomNames = names.lastNames(english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomNames[i] === "string").toBe(true);
    }
  });
});

describe("lastNames()", () => {
  test("Generate names of all languages", () => {
    for (const key in names.languages) {
      let randomNames = names.lastNames(names.languages[key]);
      expect(typeof randomNames[0] === "string").toBe(true);
    }
  });
});
