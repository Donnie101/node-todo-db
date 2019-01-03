require('./db/mongoose');
const express = require('express');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');
const port = process.env.PORT || 8080;

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome')
});

app.listen(port,()=>{
    console.log('The server is live')
})

