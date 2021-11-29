const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeConvertedUrlToOriginalUrl = async (req, res, next) => {
    console.log('changeConvertedUrlToOriginalUrl');
    try {
      const fullConvertedUrl = req.params.convertedUrl;
      const convertedUrl = fullConvertedUrl.substring(fullConvertedUrl.lastIndexOf('/') + 1);
      const data = await service.getOriginalUrlOrNULL(convertedUrl);
      if (!data) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: 'This is not a converted url'
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
