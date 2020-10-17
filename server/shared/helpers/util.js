const fs = require("fs");

module.exports = {
  /**
   * Used for exporting multiple files from a directory path
   * @param normalizedPath
   */
  getFileExports: (normalizedPath) => {
    const exports = [];
    fs.readdirSync(normalizedPath).forEach((file) => {
      exports.push(require(normalizedPath + "/" + file));
    });
    return exports;
  },

  /**
   * Used for exporting multiple file as object to import
   * @param path
   */
  getFileExportsAsObject: (path) => {
    const exports = {};

    fs.readdirSync(path).forEach(file => {
      exports[file.slice(0, -9)] = require(path + '/' + file);
    });

    return exports;
  },

  /**
   * clone an object that has no array and nested object as child
   */
  cloneObject(obj) {
    let returnObj = {};
    Object.assign(returnObj, obj);
    return returnObj;
  },

  /**
   * Common success response format
   * @param successObject
   * @param resolvedData
   * @returns {{}}
   */
  formatSuccessResponse(successObject, resolvedData) {
    const responseObject = this.cloneObject(successObject);
    responseObject.data = {...resolvedData}
    return responseObject;
  },

  /**
   * Common error response format
   * @param errorObject
   * @param error
   * @returns {{}}
   */
  formatErrorResponse(errorObject, error) {
    const responseObject = this.cloneObject(errorObject);
    if(error.message) {
      responseObject.message = `${responseObject.message}: ${error.message}`
    }
    responseObject.error = {...error}
    return responseObject;
  }
};
