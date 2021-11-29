const express = require('express');
const path = require('path');
const urlsRouter = require('./urls.route');
const emojiUrlsRouter = require('./urls.emoji.route');
const titleUrlRouter = require('./urls.title.route');
const customRouter = require('./urls.custom.route');
const testRouter = require('./test.route');

const router = express.Router();
const urlsController = require('../controllers/urls.controller');
const originalController = require('../controllers/urls.original.controller')

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
router.use('/emoji-url', emojiUrlsRouter);
router.use('/title-url', titleUrlRouter);
router.use('/custom-url', customRouter);

router.get('/original-url/:convertedUrl', originalController.changeConvertedUrlToOriginalUrl);

router.use('/test', testRouter);

router.use('/ogtest', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ogtest.html'));
});
router.use('/images/ogtest.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/images/ogtest.png'));
});

router.get('/:convertedUrl', urlsController.redirectConvertedUrlToOriginalUrl);

module.exports = router;
