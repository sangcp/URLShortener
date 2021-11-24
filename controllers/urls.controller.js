const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOrignalUrlToConvertedUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedUrl');
  // console.log(req);
  try {
    const { orignalUrl } = req.params;
    const convertedUrl = await service.getConvertedUrl(orignalUrl);
    res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.redirectConvertedUrlToOrignalUrl = async (req, res, next) => {
  console.log(req);
  try {
    const { convertedUrl } = req.params;
    const orignalUrl = await service.getOrignalUrl(convertedUrl);
    if (orignalUrl) {
      console.log('orignalUrl: ', orignalUrl);
      res.redirect(orignalUrl);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
