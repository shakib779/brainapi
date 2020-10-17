/**
 * this file is responsible for all common service functions
 */

const models = require('./../configs/mongoose.models');

class BaseService {

  constructor(model) {
    this.model = models[model];
  }

  /**
   * Gets list of required collection documents
   * @param reqQuery
   * @param populatedAttributes
   * @returns {Promise<any>}
   */
  get(reqQuery, populatedAttributes) {
    return new Promise((resolve, reject) => {
      this.model
        .find(reqQuery)
        .populate(populatedAttributes)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * create new instance
   * @param reqQuery
   * @returns {Promise<any>}
   */
  create(reqBody) {
    return new Promise((resolve, reject) => {
      this.model
        .create(reqBody)
        .then(data => {
          resolve(data._doc);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * get doc by id
   * @param id
   * @param populatedAttributes
   * @returns {Promise<unknown>}
   */
  findById(id, populatedAttributes) {
    return new Promise((resolve, reject) => {
      this.model
        .findById(id)
        .populate(populatedAttributes)
        .then(data => {
          resolve(data._doc);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * similar to find by id. it is responsible for only checking the validity of object id not to resolve the document
   * @param id
   * @returns {Promise<unknown>}
   */
  isIdValid(id) {
    return new Promise((resolve, reject) => {
      this.model
        .findById(id)
        .then((docs) => {
          resolve(docs);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  /**
   * create new instance
   * @param id
   * @param reqQuery
   * @returns {Promise<any>}
   */
  update(id, reqBody) {
    return new Promise((resolve, reject) => {
      this.isIdValid(id)
        .then(() => {
          return this.Model
            .updateOne({_id: id}, updatedDoc)
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * delete a doc
   * @param id
   * @returns {Promise<unknown>}
   */
  delete(id) {
    return new Promise((resolve, reject) => {
      this.isIdValid(id)
        .then(() => {
          return this.Model.findByIdAndDelete(id);
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * change the active status of a doc
   * @param id
   * @param status
   * @returns {Promise<unknown>}
   */
  setStatus(id, status) {
    return new Promise((resolve, reject) => {
      this.isIdValid(id)
        .then(() => {
          return this.Model
            .updateOne({_id: id}, {status: status})
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }
}

module.exports = BaseService;
