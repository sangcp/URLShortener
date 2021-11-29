const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./winston');
const env = require('../config');

const combined = ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
const morganFormat = env.NODE_ENV !== 'production' ? 'dev' : combined;
console.log(morganFormat);
const routes = require('../routes');

module.exports = async app => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors()); // all
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(morgan(morganFormat, { stream: logger.stream }));
  app.use('/', routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
  });

  return app;
};
