const User = require('../model/User')
module.exports = {
    async autenticar(req, res){
        const mat = req.body.matricula
        const senha = req.body.senha
        const user = await User.findOne({matricula: mat}, {}) 
        if(user){
            if(senha == user.senha){
                res.json(user)
            }
            else{
                res.send('autorização negada')
            }
        }
        else{
            res.send('matricula informada invalida')
        }
    }
}