//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable connect do mongodb server');
  }
  console.log('Connected to mongodb server');

  //deleteMany

  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Could not delete many todos');
  // });
  //deleteOne

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Could not delete one todo');
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  //db.close();
});
