const assets = require("../assets/names.json");
const languages = require("./languages");

const getLocalizedAssets = (language) => {
  switch (language) {
    case languages.english:
      return assets.english;
    case languages.swedish:
      return assets.swedish;
    default:
      throw 'Unknown language: "' + language + '"';
  }
};

module.exports = getLocalizedAssets;
