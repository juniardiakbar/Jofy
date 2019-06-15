const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  userOne: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  userTwo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  book: {
  	type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
  }.
  status: String,
  category: String,
  win: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;