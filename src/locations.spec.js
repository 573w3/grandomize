const locations = require("./locations");
const english = require("./languages").english;

describe("streets()", () => {
  test("Generate correct number of streets", () => {
    const count = 1000;
    let randomAddresses = locations.streets(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});

describe("addresses()", () => {
  test("Generate correct number of addresses", () => {
    const count = 1000;
    let randomAddresses = locations.addresses(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});

describe("cities()", () => {
  test("Generate correct number of cities", () => {
    const count = 1000;
    let randomCities = locations.cities(english, count);
    expect(randomCities.length).toEqual(count);
  });
});
