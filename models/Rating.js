const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: Number,
  content: String,
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Field',
  }
}, {
  timestamps: true
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;