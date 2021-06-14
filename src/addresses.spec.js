const addresses = require("./addresses");
const english = require("./languages").english;

describe("streets()", () => {
  test("Generate correct number of streets", () => {
    const count = 1000;
    let randomAddresses = addresses.streets(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});

describe("addresses()", () => {
  test("Generate correct number of addresses", () => {
    const count = 1000;
    let randomAddresses = addresses.addresses(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});
