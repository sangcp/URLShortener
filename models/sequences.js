const mongoose = require('mongoose');

const { Schema } = mongoose;

const SequencesSchema = new Schema(
  {
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const sequences = mongoose.model('sequences', SequencesSchema);

module.exports = sequences;
