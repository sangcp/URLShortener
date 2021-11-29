const express = require('express');
const controller = require('../controllers/urls.title.controller');

const router = express.Router();

router.post('/', controller.changeOriginalUrlToTitleConvertedUrl);
module.exports = router;
