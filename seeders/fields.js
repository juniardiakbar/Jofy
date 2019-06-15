const Field = require('../models/Field');

const defaultFieldOption1 = {
  name: 'Lapangan Badminton PB Fortuna',
  address: 'Jalan Haji Liun, Parigi, Pondok Aren, South Tangerang City, Banten 15229',
  price: 50000,
  contact: '+6281331132442',
  rating: 0
};

const defaultFieldOption2 = {
  name: 'ANS Badminton HALL',
  address: 'Jl. Jombang Raya No.67, Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414',
  price: 50000,
  contact: '+6281331162442',
  rating: 0
};

const defaultFieldOption3 = {
  name: 'Zahra Badminton Court',
  address: 'Jl. Pesantren No.32, Jurang Manggu Tim., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15222',
  price: 75000,
  contact: '+6281331132749',
  rating: 0
};

module.exports = new Promise((resolve, reject) => {
  const findField1 = Field.findOne();
  const findField2 = Field.findOne();
  const findField3 = Field.findOne();

  Promise.all([
    findField1, findField2, findField3,
  ])
    .then(([
      foundField1, foundField2, foundField3
    ]) => {
      const newField1 = new Field(defaultFieldOption1);
      const newField2 = new Field(defaultFieldOption2);
      const newField3 = new Field(defaultFieldOption3);

      const createdField1 = foundField1 ? null : newField1.save();
      const createdField2 = foundField2 ? null : newField2.save();
      const createdField3 = foundField3 ? null : newField3.save();

      return Promise.all([
        createdField1,
        createdField2,
        createdField3
      ]);
    })
    .then(result => resolve(result))
    .catch(e => reject(e));
});
