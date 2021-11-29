const metadata = require('../utils/metadata');
const urlService = require('./urls.service');

const removeSpecificType = str => {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  if (reg.test(str)) {
    return str.replace(reg, '-');
  }
  return str;
};

const getConvertedTitleUrlOrNULL = async originalUrl => {
  console.log(`👀 Try convert! ${originalUrl} -> "title tag info"`);
  try {
    const title = await metadata.getTitleOrNULL(originalUrl);
    if (!title) return null;
    const filteredTitle = removeSpecificType(title);
    return await urlService.getConvertedUrlOrNULL(originalUrl, filteredTitle);
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getConvertedTitleUrlOrNULL = getConvertedTitleUrlOrNULL;
