const Community = require('../models/Community');

/**
 * GET /api/community
 */

// exports.getList = (req, res) => {
//   const findCommunity = Community.find();

//   Promise.all([findCommunity])
//     .then(([community]) => {
//       res.send({
//         'status': 'success',
//         'data': community,
//       });
//     })
//     .catch(e => {
//       res.send({
//         'status': 'error',
//         'message': e, 
//       });
//     });
// };

exports.getList = (req, res) => {
  res.render('community/search');
};