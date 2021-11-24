const express = require('express');
const morgan = require('morgan');
const routes = require('../routes');

module.exports = async app => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(express.static('public'));
  app.use(morgan('combined'));

  app.use('/', routes);

  return app;
};
