const mongoose = require('mongoose');
const enums = require('./../statics/enums');
module.exports = {
  status: {
    type: String,
    required: true,
    default: enums.userStatus.active
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
  },
  address: {
    type: String
  },
  loginCount: {
    type: Number,
    required: true,
    default: 0
  },
  role: {
    type: String,
    required: true
  },
  profilePictureUrl: {
    type: String
  }
};
