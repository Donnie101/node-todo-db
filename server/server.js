require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');

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
app.listen(port,()=>{
    console.log('The server is live')
});

