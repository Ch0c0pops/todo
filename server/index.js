const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config()
const todoModel = require('./models/todoModel')

const app = express()
const PORT = config.get('serverPort')

const start = () => {
    try {
       app.listen(PORT, () => console.log('Server is running'))
    } catch (e) {

    }
}
app.get('/todos', function(req, res) {
    res.send('hello world');
});
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    function (err){
        if(err) throw err
        console.log('DB is running now!')
    } )

const todo = new todoModel({title: "найти сахар", text:"и ром"})

todo.save(function (err,data){
    if(err) return console.log(err)
    console.log(data)
})
start()