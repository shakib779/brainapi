const Joi = require("joi");
const enums = require("./../shared/statics/enums");
// const userRole = [enums.userRole.admin, enums.userRole.user];
const userRole = ["Admin", "User"];

module.exports = {
  getUserList: {
    query: Joi.object().keys({
      name: Joi.string(),
      role: Joi.string(),
      status: Joi.string(),
      email: Joi.string(),
      username: Joi.string(),
    })
  },
  createUser: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      role: Joi.string().valid(...userRole).required(),
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      dateOfBirth: Joi.date(),
      mobileNumber: Joi.string(),
      address: Joi.string(),
      profilePictureUrl: Joi.string()
    })
  }
};
