const mongoose = require('mongoose');
const config = require('./config');

module.exports = (databaseName) => {
  mongoose
    .connect(config.mongoConnectionString + databaseName, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Database connected');
    })
    .catch(err => {
      console.log('Database connection failed');
    });
};
