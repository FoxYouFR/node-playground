const {ObjectID} = require('mongodb');

const {mongoose} = require('./../../node-todo-api/server/db/mongoose.js');
const {Todo} = require('./../../node-todo-api/server/models/todo.js');
const {User} = require('./../../node-todo-api/server/models/user.js');

var id = '5b7540de2fc491135c859cc811';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('ID not found');
  }
  console.log('Todo by ID', todo);
}).catch((e) => console.log(e));
