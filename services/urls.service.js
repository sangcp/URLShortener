const Urls = require('../models/urls');
const bijective = require('../utils/bijective');

exports.getShortUrl = async longUrl => {
  console.log(longUrl);
  try {
    const doc = await Urls.findOne({ url: longUrl });
    if (doc) {
      return bijective.encode(doc._id);
    }
    const newUrl = await Urls.create({ url: longUrl });
    console.log('newUrl', newUrl);
    return bijective.encode(newUrl._id);
  } catch (err) {
    console.error(err);
  }
};

exports.getLongUrl = async key => {
  try {
    const doc = await Urls.findOne({ _id: bijective.decode(key) });
    if (doc) {
      return doc.url;
    }
    return '/';
  } catch (err) {
    console.error(err);
  }
};
