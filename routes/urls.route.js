const express = require('express');
const controller = require('../controllers/urls.controller');

const router = express.Router();

router.post('/', controller.changeOriginalUrlToConvertedUrl);
module.exports = router;
