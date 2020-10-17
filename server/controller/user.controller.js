const UserServiceClass = require("../service/user.service");
const userService = new UserServiceClass();

const requestValidator = require("../request-validators/user.request-validator");
const populatedAttributes = require("../shared/statics/populatedAttributes").user;

const util = require("../shared/helpers/util");
const errorResponses = require("../shared/statics/errorResponses");
const successResponses = require("../shared/statics/successResponses");
const enums = require("../shared/statics/enums");

module.exports = {
  getUsers: (req, res, next) => {
    requestValidator.getUserList.query
      .validateAsync(req.query)
      .then(() => {
        return userService
          .get(req.query, populatedAttributes)
      })
      .then((data) => {
        res.json(util.formatSuccessResponse(successResponses.base.get, data));
      })
      .catch((err) => {
        res.json(util.formatErrorResponse(errorResponses.base.get, err));
      });
  },

  createUser: (req, res, next) => {
    requestValidator.createUser.body
      .validateAsync(req.body)
      .then(() => {
        req.body.status = enums.modelStatus.active;
        return userService
          .create(req.body)
      })
      .then((data) => {
        res.json(util.formatSuccessResponse(successResponses.base.create, data));
      })
      .catch((err) => {
        res.json(util.formatErrorResponse(errorResponses.base.create, err));
      });
  },
};
