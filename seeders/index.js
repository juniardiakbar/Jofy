const createdFields = require('./fields');
const createdBook = require('./book');

module.exports = () => Promise.all([
  createdFields,
  createdBook,
])
  .then(([
    fields,
    book,
  ]) => {
    const fieldsMessage = !fields ? 'fields is already exist' : 'Successfully created fields';
    console.log('fields : ', fieldsMessage);
    const bookMessage = !book ? 'book is already exist' : 'Successfully created book';
    console.log('book : ', bookMessage);
  })
  .catch(e => {
    console.log('Error: ', e)
  });