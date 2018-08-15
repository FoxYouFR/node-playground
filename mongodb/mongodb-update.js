const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate(
    {
      _id: new ObjectID('5b74039b15f6931c0cc2ad26')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }
  ).then((result) => console.log(result));

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID('5b740194e9b4cc246c191c31')
    }, {
      $set: {
        name: "Florian"
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }
  ).then((result) => console.log(result));

  client.close();
});
