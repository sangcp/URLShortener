const mongoose = require('mongoose');
const Sequences = require('./sequences');

const { Schema } = mongoose;

const UrlsSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    convertedUrl: {
      type: String,
      required: true,
      index: true,
    },
    _opengraphId: {
      type: Schema.Types.ObjectId,
      ref: 'opengraph',
    },
  },
  { timestamps: true }
);

// eslint-disable-next-line func-names
const preSaveUrlsSchema = function (next) {
  // NOTE: DO NOT CHANGE THIS FUNCTION TO AN ARROW FUNCTION!
  Sequences.findOneAndUpdate({ _id: 'url_count' }, { $inc: { seq: 1 } }, { upsert: true, new: true }, (error) => {
    if (error) return next(error);
    next();
  });
};

UrlsSchema.pre('save', preSaveUrlsSchema);

const urls = mongoose.model('urls', UrlsSchema);
module.exports = urls;
