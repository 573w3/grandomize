const random = require("./random");
const { sanitizeCount } = require("./utils");
const getLocalizedAssets = require("./assetLoader");

const streets = (language, count) => {
  const streets = getLocalizedAssets(language);

  count = sanitizeCount(count);

  const randomStreets = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = random.randomInt(streets.length - 1);
    randomStreets.push(streets[randomIndex]);
  }

  return randomStreets;
};

exports.streets = streets;
