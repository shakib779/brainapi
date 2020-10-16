const mongoose = require('mongoose');
const userSchemaTemplate = require('../schema/user.schema');

const userSchema = new mongoose.Schema(userSchemaTemplate, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
