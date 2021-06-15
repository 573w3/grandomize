const languages = require("./languages");
const https = require("https");

const getLocalizedAssets = (language, assets) => {
  switch (language) {
    case languages.english:
      return assets.english;
    case languages.swedish:
      return assets.swedish;
    default:
      throw 'Unknown language: "' + language + '"';
  }
};

const getRemoteAssets = (url) => {
  return new Promise((resolve, reject) => {
    let data = "";

    https
      .get(url, (response) => {
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          const json = JSON.parse(data);
          resolve(json);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

exports.getLocalizedAssets = getLocalizedAssets;
exports.getRemoteAssets = getRemoteAssets;
