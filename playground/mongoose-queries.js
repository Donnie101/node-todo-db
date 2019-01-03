const { ObjectID } = require('mongodb')
require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user')

let id = '5c2e55bc19b3720c5646d35d';

// Todo.find({_id:id}).then((todos)=>{
//     console.log('Todos',todos)
// });

// Todo.findOne({_id:id}).then((todo)=>{
//     console.log('Todo',todo)
// });

// Todo.findById(id).then((todo) => {
//         (!todo) ? console.log('Todo not found') :
//             console.log(todo)
//     

// }).catch((error) => {
//     console.log(error)
// });






User.findById("5c2e5c95d7868a15b7db240a").then((user)=>{
    (user)?console.log(user):console.log('User Not Found');

}).catch((error)=>{
    console.log(error)
})