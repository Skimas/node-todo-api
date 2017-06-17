//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable connect do mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

//   db.collection('Users').insertOne({
//     name: 'Simon',
//     age: 21,
//     location: 'Lithuania'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert user.');
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   })

   db.close();
 });
