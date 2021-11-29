const Urls = require('../models/urls');
const Sequences = require('../models/sequences');
const bijectiveEmoji = require('../utils/bijective-emoji');
const { normalizeData } = require('../utils/normalization');

const makeConvertedEmojiUrl = async () => {
  const sequence = await Sequences.findOne({ _id: 'url_count' });
  if (sequence) {
    return bijectiveEmoji.encode(sequence.seq);
  }
  return '😀'; // first url
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

exports.getConvertedEmojiUrlOrNULL = async (originalUrl) => {
  console.log(`👀 Try Convert! ${originalUrl} -> seq emoji`);
  try {
    const convertedUrl = await makeConvertedEmojiUrl();
    const newDoc = await saveNewUrl(originalUrl, convertedUrl);
    if (!newDoc) {
      return null;
    }
    return normalizeData(newDoc);
  } catch (err) {
    console.error(err);
    return null;
  }
};
