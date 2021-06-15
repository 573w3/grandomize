const grandomize = require("./index");
const languages = require("./languages");

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
    let randomAddresses = grandomize.streets(languages.english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});

describe("cities()", () => {
  test("Generate correct number of cities", () => {
    const count = 1000;
    let randomCities = grandomize.cities(languages.english, count);
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
