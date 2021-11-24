const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = async app => {
  await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader(app);
  console.log('Express Intialized');
};
