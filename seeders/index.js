const createdFields = require('./fields');
const createdBook = require('./book');
const createdCommunity = require('./community');
const createdLoby = require('./loby');

module.exports = () => Promise.all([
  createdFields,
  createdBook,
  createdCommunity,
  createdLoby,
])
  .then(([
    fields,
    book,
    community,
    loby,
  ]) => {
    const fieldsMessage = !fields ? 'fields is already exist' : 'Successfully created fields';
    console.log('fields : ', fieldsMessage);
    const bookMessage = !book ? 'book is already exist' : 'Successfully created book';
    console.log('book : ', bookMessage);
    const communityMessage = !community ? 'community is already exist' : 'Successfully created community';
    console.log('community : ', communityMessage);
    const lobyMessage = !loby ? 'loby is already exist' : 'Successfully created loby';
    console.log('loby : ', lobyMessage);
  })
  .catch(e => {
    console.log('Error: ', e)
  });