require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')

const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    let {text} = req.body;
    let todo = new Todo({
        text
    });

    todo.save().then((savedTodo)=>{
        res.status(200).send(savedTodo)
    }).catch((error)=>{
        res.status(400).send(error)
    })
});

app.get('/todos',(req,res)=>{
    Todo.find({}).then((todos)=>{
        res.status(200).send(todos)
    }).catch((error)=>{
        res.status(400).send(todos)
    });
});

app.get('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(ObjectID.isValid(id)){
        Todo.findById(id).then((todo)=>{
            (todo)?res.status(200).send(todo):
                res.status(404).send('Todo Not Found')
        }).catch((error)=>{
            res.status(400).send(error)
        })
    }else{
        res.status(400).send('ID Not Valid')
    }
});

app.listen(port,()=>{
    console.log('The server is live')
});

module.exports = {app}

