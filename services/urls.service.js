const Urls = require('../models/urls');
const Sequences = require('../models/sequences');
const bijective = require('../utils/bijective');
const { normalizeData } = require('../utils/normalization');

const makeConvertedUrl = async () => {
  const sequence = await Sequences.findOne({ _id: 'url_count' });
  if (sequence) {
    return bijective.encode(sequence.seq);
  }
  return 'a'; // first url
};

const saveNewUrl = async (originalUrl, convertedUrl) => {
  try {
    const newDoc = new Urls({
      originalUrl,
      convertedUrl,
    });
    await newDoc.save();
    console.log('🥳 Save New URL: ', newDoc);
    return newDoc;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getConvertedUrlOrNULL = async (originalUrl, customWord = null) => {
  console.log(`👀 Try Convert! ${originalUrl} -> ${customWord == null ? '"seq count"' : customWord}`);
  try {
    const convertedUrl = customWord || await makeConvertedUrl();
    const sameDoc = await Urls.findOne({ originalUrl, convertedUrl });
    if (sameDoc) {
      return normalizeData(sameDoc);
    }
    const sameDocConvertedUrl = await Urls.findOne({ convertedUrl });
    if (sameDocConvertedUrl) {
      return null;
    }
    const newDoc = await saveNewUrl(originalUrl, convertedUrl);
    if (newDoc === null) {
      return null;
    }
    return normalizeData(newDoc);
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getOriginalUrlOrNULL = async convertedUrl => {
  try {
    const doc = await Urls.findOne({ convertedUrl });
    if (!doc) {
      return null;
    }
    return normalizeData(doc);
  } catch (err) {
    console.error(err);
    return null;
  }
};
