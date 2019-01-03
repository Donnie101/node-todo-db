const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
    if (error)
        console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('todos').find({completed:true}).toArray().then((data)=>{
    //     console.log(data)
    // }).catch((error)=>{
    //     console.log(error)
    // });

    db.collection('Users').insertOne({
        name:'Elon Musk',
        age:47,
        location:'LA, CA'
    },(error,result)=>{
        if(error) console.log(error);

        console.log('User Added')
    })

    db.collection('Users').find({age:47}).toArray()
        .then((users)=>{
            console.log(users)
        }).catch((error)=>{
            console.log(error)
        })

    client.close();
});