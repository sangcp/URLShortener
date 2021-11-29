const express = require('express');

const controller = require('../controllers/urls.custom.controller');

const router = express.Router();

router.post('/', controller.changeOriginalUrlToCustomUrl);

module.exports = router;
