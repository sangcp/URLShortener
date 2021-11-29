const env = require('../config');
const mongoose = require('mongoose');

exports.normalizeData = (doc) => {
	return {
		id: mongoose.Types.ObjectId(doc._id),
		url: `${env.origin}/${doc.convertedUrl}`,
		originalUrl: doc.originalUrl,
		createdTime: doc.createdAt
	};
}
