const express = require('express')
const router = express.Router()
const CadastroController = require('./controller/CadastroController')
const loginController = require('./controller/loginController')
const ListController = require('./controller/ListController')

router.get('/listar', ListController.listar)

router.delete('/delete', ListController.delete)

router.post('/cadastro', CadastroController.cadastrar)

router.post('/login', loginController.autenticar)

module.exports = router