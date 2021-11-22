const mongoose = require("mongoose");

const {Schema} = mongoose;

const SequencesSchema = Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const sequences = mongoose.model("sequences", SequencesSchema);

const UrlsSchema = new Schema({
    _id: { type: Number },
    url: String,
    created_at: Date
});

UrlsSchema.pre("save", function(next) {
    const self = this;
    console.log(self.url);
    sequences.findOneAndUpdate(
        { _id: "url_count" },
        { $inc: { seq: 1 } },
        { upsert: true },
        (error, result) => {
            console.log(result);
            if (error) return next(error);
            self.created_at = new Date();
            self._id = result.seq;
            console.log(self);
            return next();
        }
    );
});

const urls = mongoose.model("urls", UrlsSchema);

module.exports = urls;