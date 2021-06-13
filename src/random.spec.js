const random = require("./random");

describe("random", () => {
  it("Can generate ints", () => {
    const rand = random.randomInt(10);
    expect(rand).toBeDefined();
  });
});

describe("random:", () => {
  it("Generates 1000 ints within given range", () => {
    for (let i = 0; i < 1000; i++) {
      const rand = random.randomInt(5);
      expect([0, 1, 2, 3, 4, 5]).toContain(rand);
    }
  });
});

describe("random:", () => {
  it("Generates 100 ints within [0, 1] for visual inspection:", () => {
    let ints = [];
    for (let i = 0; i < 100; i++) {
      ints.push(random.randomInt(1));
    }
    console.log(ints);
  });
});

describe("random:", () => {
  it("Generates 100 ints within [0, 10] for visual inspection:", () => {
    let ints = [];
    for (let i = 0; i < 100; i++) {
      ints.push(random.randomInt(10));
    }
    console.log(ints);
  });
});

describe("random:", () => {
  it("Can generate 1000 booleans", () => {
    for (let i = 0; i < 100; i++) {
      let bool = random.randomBoolean();
      expect([true, false]).toContain(bool);
    }
  });
});
