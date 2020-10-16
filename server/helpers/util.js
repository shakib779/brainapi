const fs = require("fs");

module.exports = {
  getFileExports: (normalizedPath) => {
    const exports = [];
    fs.readdirSync(normalizedPath).forEach((file) => {
      exports.push(require(normalizedPath + "/" + file));
    });
    return exports;
  },

  getFileExportsAsObject: (path) => {
    const exports = {};

    fs.readdirSync(path).forEach(file => {
      exports[file.slice(0, -9)] = require(path + '/' + file);
    });

    return exports;
  },
};
