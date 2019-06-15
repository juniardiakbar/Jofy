const Loby = require('../models/Loby');

/**
 * GET /api/loby
 */

// exports.getList = (req, res) => {
//   let {
//     date,
//     time,
//     duration,
//     sortquery,
//     page,
//   } = req.query;

//   page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
//   sort = 'bookId.createdAt';
//   method = 'DESC';
//   const sortObject = {};
//   sortObject[sort] = method;

//   const limit = 10;

//   const findLoby = Loby.find()
//     .populate('bookId')
//     .limit(limit)
//     .skip((page - 1) * limit)
//     .sort(sortObject);

//   Promise.all([findLoby])
//     .then(([loby]) => {
//       res.send({
//         'status': 'success',
//         'data': loby,
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
  res.render('loby/search');
};

exports.getView = (req, res) => {
  res.render('loby/view');
};