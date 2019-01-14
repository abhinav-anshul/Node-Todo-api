//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Console to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c3cd2554d48d12ee0e623d0')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });



  //db.close();
});
