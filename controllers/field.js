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

      res.render('field/search',{
        result,
        field,
        query: req.query,
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
        "field": req.params.id
      },
      {
        "bookDate": { $eq: date } 
      }
    ]
  })

  const findBookQuery = Book.find({
    $and: [
      {
        "field": req.params.id
      },
      {
        "bookDate": { $eq: date }
      },
      {
        "startHour": { $in: range }
      }
    ]
  })
  // const findBook = Book.find();

  Promise.all([findField, findBook, findBookQuery])
    .then(([field, book, bookQuery]) => {
      var hours = [];
      book.forEach((data) => {
        var rangeHour = []; 
        for (let i = parseInt(data.startHour); i < parseInt(data.startHour) + parseInt(data.duration); i++) {
          hours.push(i);
        }        
      });
      res.render('field/view', {
        field,
        hours,
        result: bookQuery.length == 0,
        query: req.query,
        id: req.params.id,
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

exports.postForm = (req, res) => {
  const { startHour, duration, bookDate } = req.body
  const orderPeople = req.user._id;
  const field = req.params.id;
  Book.find()
    .then(result => {      
      newBook = new Book({
        orderPeople, field, startHour, duration, bookDate      
      });

      return newBook.save();
    })
    .then(() => {
      req.flash('success', {
        msg: 'Your new book has been added.'
      });
      res.redirect(`/field/${req.params.id}`);
    })
    .catch(e => {
      req.flash('errors', {
        msg: e.message
      });
      console.log('Error occured', e);
      res.redirect(`/field/${req.params.id}`);
    });
}