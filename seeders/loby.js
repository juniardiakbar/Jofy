const Loby = require('../models/Loby');

const defaultLobyOption = {
  max: 4,
  orderPeoples: ["5d04833a8695010045b78973"],
  bookId: "5d04837e14f1b8005826067c",
};

module.exports = new Promise((resolve, reject) => {
  const findLoby = Loby.findOne();

  Promise.all([
    findLoby,
  ])
    .then(([
      foundLoby
    ]) => {
      const newLoby = new Loby(defaultLobyOption);

      const createdLoby = foundLoby ? null : newLoby.save();

      return Promise.all([
        createdLoby,
      ]);
    })
    .then(result => resolve(result))
    .catch(e => reject(e));
});
