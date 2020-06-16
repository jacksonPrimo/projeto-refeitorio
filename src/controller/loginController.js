const User = require('../model/User')
const express = require('express')
module.exports = {
    async autenticar(req, res){
        const mat = req.body.matricula
        //localStorage.setItem("matricula", mat)
        const senha = req.body.senha
        const user = await User.findOne({matricula: mat}, {}) 
        if(user){
            if(senha == user.senha){
                res.json(user)
            }
            else{
                res.json({"erro":"autorização negada"})
            }
        }
        else{
            res.json({"erro":"matricula informada invalida"})
        }
    }
}