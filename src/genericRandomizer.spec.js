const genericRandomizer = require("./genericRandomizer").genericRandomizer;
const english = require("./languages").english;
const streets = require("../assets/streets.json");

describe("genericRandomizer()", () => {
  test("Generate correct number of streets", () => {
    const count = 1000;
    const randomStreets = genericRandomizer(streets, english, count);
    expect(randomStreets.length).toEqual(count);
  });
});
