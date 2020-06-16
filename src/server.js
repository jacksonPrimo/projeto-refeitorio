const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const Routes = require('./routes')

mongoose.connect('mongodb+srv://jackson:toradora@minhaaplicacao-jexsg.mongodb.net/meuDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/View'))
app.get('/', (req, res)=>{res.send('esta funcionando')})
app.use(Routes)

var server = app.listen(3333, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})