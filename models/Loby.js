const mongoose = require('mongoose');

const lobySchema = new mongoose.Schema({
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

const Loby = mongoose.model('Loby', lobySchema);

module.exports = Loby;