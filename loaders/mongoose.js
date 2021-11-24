const mongoose = require('mongoose');
const env = require('../config');

module.exports = async () => {
  mongoose.connect(env.databaseURL);
};
