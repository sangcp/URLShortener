const httpStatus = require('http-status');
const service = require('../services/urls.service');
const { joinProtocol, isValidUrl, isValidCustomWord } = require('../utils/validate');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    let { originalUrl } = req.body;
    const { customWord } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl)) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }
    if (!isValidCustomWord(customWord))
    {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Custom word is invalid',
      });
    }

    const data = await service.getConvertedUrlOrNULL(originalUrl, customWord);
    if (!data) {
      return res.status(httpStatus.CONFLICT).send({
        message: 'Custom word already uesd',
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
