const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
    if (error)
        console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error)
    //         console.log('Couldn\'t add item to the DB', error)

    //     console.log(JSON.stringify(result.ops))


    // });

    db.collection('Users').insertOne({
        name: 'Jack',
        age: 20,
        location: 'Montreal CA'
    }, (error, result) => {
        if (error)
            console.log('Unabler to add users', error)

        console.log(JSON.stringify(result.ops))
    });

    client.close();
});