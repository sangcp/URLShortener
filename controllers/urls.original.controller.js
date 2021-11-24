const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeConvertedUrlToOriginalUrl = async (req, res, next) => {
    console.log('changeConvertedUrlToOriginalUrl');
    try {
      const localUrl = req.params.ConvertedUrl;
      const enId = localUrl.substring(localUrl.lastIndexOf('/') + 1);
      const originalUrl = await service.getLongUrl(enId);
      res.status(httpStatus.OK).send({
        key: originalUrl,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  