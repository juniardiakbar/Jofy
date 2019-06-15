const Field = require('../models/Field');
const Book = require('../models/Book');

/**
 * GET /api/field
 */
exports.getList = (req, res) => {
  let {
    date,
    time,
    duration,
    sortquery,
    page,
  } = req.query;

  page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  if (!sortquery || sortquery == 'lowestprice'){
    sort = 'price';
    method = 'DESC';
  } else if (sortquery == 'higestprice') {
    sort = 'price';
    method = 'ASC';
  } else if (sortquery == 'higestrating') {
    sort = 'rating';
    method = 'ASC';
  }
  const sortObject = {};
  sortObject[sort] = method;

  const limit = 10;

  const findField = Field.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sortObject);

  var range = [];
  for (let i = parseInt(time); i < parseInt(time) + parseInt(duration); i++) {
    range.push(i);
  }

  const findBook = Book.find({
    $and: [
      {
        "bookDate": { $eq: date }
      },
      {
        "startHour": { $in: range }
      }
    ]
  })

  Promise.all([findField, findBook])
    .then(([field, book]) => {
      const bookField = [];
      book.forEach((data) => {
        bookField.push(data.field.toString());
      })

      const result = [];
      field.forEach((data) => {
        result.push(bookField.includes(data._id.toString()));
      });

      res.send({
        'status': 'success',
        'data.field': field,
        'data.book': book,
        'data.result': result,
      });
    })
    .catch(e => {
      res.send({
        'status': 'error',
        'message': e, 
      });
    });
};

/**
 * GET /api/field/:id
 */
exports.getView = (req, res) => {
  let {
    date,
    time,
    duration,
  } = req.query;

  const findField = Field.findById(req.params.id);

  var range = [];
  for (let i = parseInt(time); i < parseInt(time) + parseInt(duration); i++) {
    range.push(i);
  }

  const findBook = Book.find({
    $and: [
      {
        "bookDate": { $eq: date }
      },
      {
        "startHour": { $in: range }
      }
    ]
  })
  // const findBook = Book.find();

  Promise.all([findField, findBook])
    .then(([field, book]) => {
      const bookField = [];
      book.forEach((data) => {
        bookField.push(data.field.toString());
      })

      const result = bookField.includes(field._id.toString());

      res.send({
        'status': 'success',
        'data.field': field,
        'data.book': book,
        'data.result': result,
      });
    })
    .catch(e => {
      res.send({
        'status': 'error',
        'message': e, 
      });
    });
};

/**
 * GET /field/:id/book
 */
exports.getForm = (req, res) => {
  res.render('field/book');
}