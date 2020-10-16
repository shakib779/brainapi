const config = require('./config.js');
const express = require('express');

const app = express();
const router = express.Router();

app.listen(config.serverPort, () => console.log('Server started at port : ' + config.serverPort.toString()));

module.exports = {
  app,
  router
};
