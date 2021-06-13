const grandomize = require("./index");

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
