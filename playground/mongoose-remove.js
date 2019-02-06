const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove

Todo.findByIdAndRemove('5c5a90053a09f047e8895e2a').then((todo) => {
  console.log(todo);
});
