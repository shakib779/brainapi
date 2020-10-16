const util = require('./../helpers/util');
const path = require('path');

const normalizedPath = path.join(__dirname + `/../models`);

const models = util.getFileExportsAsObject(normalizedPath);

module.exports = models;
