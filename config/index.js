const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  origin: process.env.ORIGIN || 'localhost:3000',
  port: process.env.PORT || 3000,
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost/url-shortener',
};
