const Field = require('../models/Field');

module.exports = new Promise((resolve, reject) => {
  const defaultFieldOption = {
    name: 'Lapangan Badminton PB Fortuna',
    address: 'Jalan Haji Liun, Parigi, Pondok Aren, South Tangerang City, Banten 15229',
    price: 50000,
    contact: '+6281331132442',
    rating: 0
  };

  Field.findOne({
  })
    .then((foundField) => {
      if (foundField) {
        return (null);
      }
      const newField = new Field(defaultFieldOption);
      return newField.save();
    })
    .then((createdField) => {
      if (createdField) {
        resolve(createdField);
      }
      resolve(null);
    })
    .catch(e => reject(e));
});
