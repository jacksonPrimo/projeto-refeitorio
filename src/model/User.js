const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    matricula: String,
    nome: String,
    email: String,
    foto: String,
    curso: String,
    senha: String
})

module.exports = mongoose.model('User', UserSchema)