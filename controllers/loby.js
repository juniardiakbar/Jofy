const Loby = require('../models/Loby');

/**
 * GET /api/loby
 */

exports.getList = (req, res) => {
  sort = 'bookId.createdAt';
  method = 'DESC';
  const sortObject = {};
  sortObject[sort] = method;

  const limit = 10;

  const findLoby = Loby.find()
    .populate({
      path : 'bookId',
      populate : {
        path : 'field',
      }
    })
    .limit(limit)
    .sort(sortObject);

  Promise.all([findLoby])
    .then(([loby]) => {
    	res.render('loby/search', {
        loby,
      });
    })
    .catch(e => {
      res.send({
        'status': 'error',
        'message': e, 
      });
    });
};

exports.getView = (req, res) => {
  res.render('loby/view');
};