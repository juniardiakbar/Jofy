const Community = require('../models/Community');

const defaultCommunityOption = {
  name: 'Komunitas Nasi Goreng Pak Mus Lover',
  leader: '5d03a7cd136bfe0059f7ef45',
  member: ['5d03a7cd136bfe0059f7ef45'],
  point: 0,
};

module.exports = new Promise((resolve, reject) => {
  const findCommunity = Community.findOne();

  Promise.all([
    findCommunity,
  ])
    .then(([
      foundCommunity
    ]) => {
      const newCommunity = new Community(defaultCommunityOption);

      const createdCommunity = foundCommunity ? null : newCommunity.save();

      return Promise.all([
        createdCommunity,
      ]);
    })
    .then(result => resolve(result))
    .catch(e => reject(e));
});
