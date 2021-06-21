const assetLoader = require("./assetLoader");

describe("getRemoteAssets()", () => {
  test("Get remote asset", () => {
    return assetLoader
      .getRemoteAssets(
        "https://raw.githubusercontent.com/573w3/grandomize/master/assets/streets.json"
      )
      .then((assets) => {
        expect(assets.english).toBeDefined();
        expect(assets.swedish).toBeDefined();
      });
  });
});

describe("getLocalAssets()", () => {
  test("Get local asset", () => {
    return assetLoader
      .getLocalAssets("./assets/cities.json", "utf8")
      .then((assets) => {
        expect(assets.english).toBeDefined();
        expect(assets.swedish).toBeDefined();
      });
  });
});
