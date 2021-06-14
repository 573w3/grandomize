const random = require("./random");

describe("randomInt()", () => {
  test("Generated int is defined", () => {
    const rand = random.randomInt(10);
    expect(rand).toBeDefined();
  });
});

describe("randomInt()", () => {
  test("1000 random ints are within given range", () => {
    for (let i = 0; i < 1000; i++) {
      const rand = random.randomInt(5);
      expect([0, 1, 2, 3, 4, 5]).toContain(rand);
    }
  });
});

describe("randomBoolean()", () => {
  test("1000 booleans are either 'true' or 'false'", () => {
    for (let i = 0; i < 100; i++) {
      let bool = random.randomBoolean();
      expect([true, false]).toContain(bool);
    }
  });
});
