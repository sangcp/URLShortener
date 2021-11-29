const mongoose = require('mongoose');

const { Schema } = mongoose;

const OpengraphsSchema = new Schema(
  {
    _url_id: {
      type: Schema.Types.ObjectId,
      ref: 'Urls',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

const opengraph = mongoose.model('opengraph', OpengraphsSchema);
module.exports = opengraph;
