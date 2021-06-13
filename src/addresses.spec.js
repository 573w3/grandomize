const addresses = require("./addresses");
const english = require("./languages").english;

describe("streets()", () => {
  it("Can generate correct number streets", () => {
    const count = 1000;
    let randomAddresses = addresses.streets(english, count);
    expect(randomAddresses.length).toEqual(count);
  });
});
