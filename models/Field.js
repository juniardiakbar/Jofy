const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  name: String,
  address: String,
  lat: Number,
  lng: Number,
  price: Number,
  contact: String,
  rating: Number,
}, { timestamps: true });

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;