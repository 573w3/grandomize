const random = require("./random");

describe("Testing the random number generator", () => {
  it("Can generate numbers", () => {
    const rand = random.randomInt(10);
    expect(rand).toBeDefined();
  });
});
