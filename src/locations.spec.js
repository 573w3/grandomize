const locations = require("./locations");
const english = require("./languages").english;

describe("addresses()", () => {
  test("Generate correct number of addresses", () => {
    const count = 1000;
    let randomAddresses = locations.addresses(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});
