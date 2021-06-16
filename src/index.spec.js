const grandomize = require("./index");
const languages = grandomize.languages;
const english = languages.english;

describe("index", () => {
  it("Module is exported", () => {
    expect(grandomize).toBeDefined();
    expect(grandomize.firstNames).toBeDefined();
    expect(grandomize.lastNames).toBeDefined();
  });
});

describe("index", () => {
  it("lastNames() is defined", () => {
    expect(grandomize.lastNames).toBeDefined();
  });
});

describe("index", () => {
  it("firstNames() is defined", () => {
    expect(grandomize.firstNames).toBeDefined();
  });
});

describe("streets()", () => {
  test("Generate correct number of streets", () => {
    const count = 1000;
    let randomAddresses = grandomize.streets(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});

describe("cities()", () => {
  test("Generate correct number of cities", () => {
    const count = 1000;
    let randomCities = grandomize.cities(english, count);
    expect(randomCities.length).toEqual(count);
  });
});

describe("cheese()", () => {
  test("Generate correct number of cheese", () => {
    const count = 1000;
    let randomCities = grandomize.cheese(count);
    expect(randomCities.length).toEqual(count);
  });
});

describe("lastNames()", () => {
  test("Generate correct number of names", () => {
    const count = 1000;
    let randomNames = grandomize.lastNames(english, count);
    expect(randomNames.length).toEqual(count);
  });
});

describe("lastNames()", () => {
  test("Generated names are strings", () => {
    const count = 1000;
    let randomNames = grandomize.lastNames(english, count);
    for (let i = 0; i < count; i++) {
      expect(typeof randomNames[i] === "string").toBe(true);
    }
  });
});

describe("lastNames()", () => {
  test("Generate names of all languages", () => {
    for (const key in languages) {
      let randomNames = grandomize.lastNames(languages[key]);
      expect(typeof randomNames[0] === "string").toBe(true);
    }
  });
});
