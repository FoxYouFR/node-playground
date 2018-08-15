const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b7401a7b600942874db30bc')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.collection('Users').deleteMany({name: "Florian"}).then((result) => {
    console.log(result);
  });

  client.close();
});
