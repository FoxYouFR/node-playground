const {ObjectID} = require('mongodb');

const {mongoose} = require('./../../node-todo-api/server/db/mongoose.js');
const {Todo} = require('./../../node-todo-api/server/models/todo.js');
const {User} = require('./../../node-todo-api/server/models/user.js');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '5b754c0d19cc94097c0740ca'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b754c0d19cc94097c0740ca').then((todo) => {
  console.log(todo);
});
