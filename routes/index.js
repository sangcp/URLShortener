const express = require('express');
const urlsRouter = require('./urls.route');

const router = express.Router();
const urlsController = require('../controllers/urls.controller');
const OriginalController = require('../controllers/urls.original.controller')

/**
 * GET /status : API Status
 */

router.get('/api/status', (req, res) => {
  res.json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use('/url', urlsRouter);

router.get('/:convertedUrl', urlsController.redirectConvertedUrlToOrignalUrl);

router.get('/original-url/:ConvertedUrl', OriginalController.changeConvertedUrlToOriginalUrl);

module.exports = router;
