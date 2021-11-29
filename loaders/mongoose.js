const mongoose = require('mongoose');
const env = require('../config');

module.exports = async () => {
  mongoose
    .connect(env.databaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`mongoDB connected`))
    .catch(err => console.error(err));
};
