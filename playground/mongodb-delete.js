const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
    if (error)
        console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndDelete({ name: 'Elon Musk' }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });

    // db.collection('Users').find().toArray().
    //     then((users) => {
    //         console.log(users)
    //     })

    client.close();
});