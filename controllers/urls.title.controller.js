const httpStatus = require('http-status');
const service = require('../services/urls.title.service');
const { joinProtocol, isValidUrl } = require('../utils/validate');

exports.changeOriginalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToConvertedTitleUrl');
  try {
    let { originalUrl } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl)) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }

    const data = await service.getConvertedTitleUrlOrNULL(originalUrl);
    if(!data) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: 'Reject get title-url some reason',
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
