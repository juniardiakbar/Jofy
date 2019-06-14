const Field = require('../models/Field');

module.exports = new Promise((resolve, reject) => {
  const defaultFieldOption = {
    name: 'ANS Badminton HALL',
    address: 'Jl. Jombang Raya No.67, Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414',
    price: 50000,
    contact: '+6281331162442',
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
