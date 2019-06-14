const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: String,
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
	},
	member: [{
		type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
	}],
	point: Number,
}, { timestamps: true });

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;