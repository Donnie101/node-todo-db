const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
    if (error)
        console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5c2e0170c184d473c0ce10d2') },
        {
            $set:{
                name:'Elon Reeve Musk'
            }
        },{
            returnOriginal:false
        }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });

    client.close();
});