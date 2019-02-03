const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c564c70ca545bcc4c74005e';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });


User.findById('5c48e8e7f41ca9ac20b7120d').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
