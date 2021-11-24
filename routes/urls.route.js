const express = require('express');

const controller = require('../controllers/urls.controller');

const router = express.Router();

router.get('/:orignalUrl', controller.changeOrignalUrlToConvertedUrl);
module.exports = router;
