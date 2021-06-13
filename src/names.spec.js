const names = require("./names");
const english = require("./languages").english;

// first
describe("firstNames()", () => {
  it("Can generate correct number names", () => {
    const count = 1000;
    let randomNames = names.firstNames(english, count);
    expect(randomNames.length).toEqual(count);
  });
});

describe("firstNames()", () => {
  it("Can generate actual names", () => {
    const count = 1000;
    let randomNames = names.firstNames(english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomNames[i] === "string").toBe(true);
    }
  });
});

describe("firstNames()", () => {
  it("Can generate 10 names for visual inspection", () => {
    const count = 10;
    const randomNames = names.firstNames(english, count);
    console.debug(randomNames);
  });
});

// last
describe("lastNames()", () => {
  it("Can generate correct number of names", () => {
    const count = 1000;
    let randomNames = names.lastNames(english, count);
    expect(randomNames.length).toEqual(count);
  });
});

describe("lastNames()", () => {
  it("Can generate actual names", () => {
    const count = 1000;
    let randomNames = names.lastNames(english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomNames[i] === "string").toBe(true);
    }
  });
});

describe("lastNames()", () => {
  it("Can generate names of all languages", () => {
    for (const key in names.languages) {
      let randomNames = names.lastNames(names.languages[key]);
      expect(typeof randomNames[0] === "string").toBe(true);
    }
  });
});
