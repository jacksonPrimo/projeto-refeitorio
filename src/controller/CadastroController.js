const User = require('../model/User')
module.exports = {
    async cadastrar(req, res){
        const {matricula, nome, email, foto, curso, senha} = req.body;
        
        const lista = await User.find({},{})
        let achou = false
        for(let i = 0; i < lista.length; i++){
            if(email == lista[i].email || matricula == lista[i].matricula){
                res.send('estes dados ja estão em uso, tente novamente')
                achou = true
                break;
            }
        }
        if(!achou){
            const user = await User.create({
                matricula,
                nome,
                email,
                foto,
                curso,
                senha
            })
            res.send(matricula)
        }
    }
}