const https = require("https");

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

exports.getRemoteAssets = getRemoteAssets;
