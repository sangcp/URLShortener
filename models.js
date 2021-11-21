let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let SequencesSchema = Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

let sequences = mongoose.model("sequences", SequencesSchema);

let UrlsSchema = new Schema({
    _id: { type: Number },
    url: String,
    created_at: Date
});

UrlsSchema.pre("save", function(next) {
    let self = this;
    sequences.findOneAndUpdate(
        { _id: "url_count" },
        { $inc: { seq: 1 } },
        { upsert: true },
        function(error, result) {
            console.log(result);
            if (error) return next(error);
            self.created_at = new Date();
            self._id = result.seq;
            next();
        }
    );
});

let urls = mongoose.model("urls", UrlsSchema);

module.exports = urls;