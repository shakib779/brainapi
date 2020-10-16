const Joi = require("joi");
const userType = require("../statics/userRole").validUserType;

module.exports = {
  getUserList: {
    query: Joi.object().keys({
      userType: Joi.string().valid(userType.join(",")),
    }),
  },
};
