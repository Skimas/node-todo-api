//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable connect do mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59457fdf515d02c0f38d70b4')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  })

  //db.close();
});
