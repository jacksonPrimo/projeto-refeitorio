const User = require('../model/User')
module.exports = {
    async listar(req, res){
        const user = await User.find({},{})
        res.send(user)
    },
    async delete(req, res){
        await User.deleteMany({})
        res.send('arquivos deletados')
    }
}