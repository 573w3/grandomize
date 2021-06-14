const genericRandomizer = require("./genericRandomizer");
const english = require("./languages").english;
const streets = require("../assets/streets.json");

describe("genericRandomizer()", () => {
  test("Generate correct number of streets", () => {
    const count = 1000;
    const randomStreets = genericRandomizer(english, count, streets);
    expect(randomStreets.length).toEqual(count);
  });
});
