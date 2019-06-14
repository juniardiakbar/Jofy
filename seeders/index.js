const createdField = require('./field')
const createdField2 = require('./field2')
const createdField3 = require('./field3')


module.exports = () => Promise.all([
  createdField,
  createdField2,
  createdField3,
])
  .then(([
    field,
    field2,
    field3,
  ]) => {
    const fieldMessage = !field ? 'field is already exist' : 'Successfully created field';
    console.log('field : ', fieldMessage);

    const fieldMessage2 = !field2 ? 'field is already exist' : 'Successfully created field2';
    console.log('field2 : ', fieldMessage2);
    
    const fieldMessage3 = !field3 ? 'field is already exist' : 'Successfully created field3';
    console.log('field3 : ', fieldMessage3);
  })
  .catch(e => {
    console.log('Error: ', e)
  });