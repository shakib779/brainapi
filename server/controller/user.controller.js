const UserServiceClass = require("../service/user.service");
const requestValidator = require("../request-validators/user.request-validator");
const userService = new UserServiceClass();
const util = require("../helpers/util");
const errorResponses = require("./../statics/errorResponses");
const successResponses = require("../statics/successResponses");

module.exports = {
  getUsers: (req, res, next) => {
    return userService
      .get(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("not ok");
      });
  },

  createUser: (req, res, next) => {
    return userService
      .create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json("not ok");
      });
  }
};
