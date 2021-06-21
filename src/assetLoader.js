const firstNames = require("../assets/firstNames.json");
const lastNames = require("../assets/lastNames.json");
const streets = require("../assets/streets.json");
const cities = require("../assets/cities.json");
const cheese = require("../assets/cheese.json");

const https = require("https");
const fs = require("fs");

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

const getLocalAssets = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) {
        reject();
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

exports.nativeAssets = {
  firstNames,
  lastNames,
  streets,
  cities,
  cheese,
};

exports.getRemoteAssets = getRemoteAssets;
exports.getLocalAssets = getLocalAssets;
