//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Console to MongoDB server');

  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c3c6eb34623443ee8c52246')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c3c5f5142e37c39289b7967')
    }, {
      $set: {name: 'Abhinavanshul'},
      $inc: {age: 1}
      },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    }).catch(function () {
     console.log("Promise Rejected");
});




  //db.close();
});
