const Field = require('../models/Field');

module.exports = new Promise((resolve, reject) => {
  const defaultFieldOption = {
    name: 'Zahra Badminton Court',
    address: 'Jl. Pesantren No.32, Jurang Manggu Tim., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15222',
    price: 75000,
    contact: '+6281331132749',
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
