const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  orderPeople: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Field',
  }.
  startHour: Number,
  duration: Number,
  bookDate: Date,
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;