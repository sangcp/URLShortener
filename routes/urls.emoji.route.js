const express = require('express');
const urlsEmojiController = require('../controllers/urls.emoji.controller');

const router = express.Router();

router.post('/', urlsEmojiController.changeOriginalUrlToConvertedEmojiUrl);

module.exports = router;
