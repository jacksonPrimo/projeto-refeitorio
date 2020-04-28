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

app.listen(3333, ()=>{
    console.log('servidor rodando na porta 3333')
})