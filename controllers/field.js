const Field = require('../models/Field');

/**
 * GET /api/field/search
 */

 exports.getList = (req, res) => {
  const findField = Field.find();

  Promise.all([findField])
    .then(([field]) =>
      res.send({
        'status': 'success',
        'data': field, 
      })
    )
    .catch(e => {
      res.sends({
        'status': 'error',
        'message': e, 
      })
    });
};