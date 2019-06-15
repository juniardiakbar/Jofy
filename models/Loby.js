const mongoose = require('mongoose');

const lobySchema = new mongoose.Schema({
	name: String,
  max: Number,
  orderPeoples: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
}, { timestamps: true });

// var autoPopulateBookId = function(next) {
//   this.populate('bookId');
//   next();
// };

// lobySchema.
//   pre('findOne', autoPopulateBookId).
//   pre('find', autoPopulateBookId);

const Loby = mongoose.model('Loby', lobySchema);

module.exports = Loby;