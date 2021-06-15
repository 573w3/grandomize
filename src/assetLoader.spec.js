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
