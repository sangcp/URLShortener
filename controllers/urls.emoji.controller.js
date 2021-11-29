const httpStatus = require('http-status');
const service = require('../services/urls.emoji.service');
const { joinProtocol, isValidUrl } = require('../utils/validate');

exports.changeOriginalUrlToConvertedEmojiUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedEmojiUrl');
  try {
    let { originalUrl } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl))
    {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }

    const data = await service.getConvertedEmojiUrlOrNULL(originalUrl);
    if (!data) {
      return res.status(httpStatus.serverError).send({
        message: 'Failed to save database.',
      });
    }
    return res.status(httpStatus.OK).send({
      message: 'ok',
      status: httpStatus.OK,
      data
    });
  } catch (err) {
    console.error(err);
    next(err);
    return null;
  }
};
