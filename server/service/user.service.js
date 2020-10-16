const User = require('./../models/user.model');

class UserService {
  /**
   * Gets list of required collection documents
   * @param reqQuery
   * @returns {Promise<any>}
   */
  get(reqQuery) {
    return new Promise((resolve, reject) => {
      User
        .find(reqQuery)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  // TODO: Password encryption
  create(reqBody) {
    return new Promise((resolve, reject) => {
      User
        .create(reqBody)
        .then(data => {
          resolve(data._doc);
        })
        .catch(err => {
          console.log(err)
          reject(err);
        })
    });
  }
}

module.exports = UserService;
