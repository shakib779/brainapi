module.exports = {
  serverPort: process.env.PORT || 3000,
  mongoConnectionString: process.env.MONGODB_URL || "mongodb://localhost:27017/",
};
