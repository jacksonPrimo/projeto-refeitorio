const User = require('../model/User')
async function listar(){
    const user = await User.find({},{})
    console.log("aaaaaaa")
}
listar()
/*for(let i = 0; i < 2; i++){
    if(email == emails[i].email || matricula == matriulas[i].matricula){
        res.send('estes dados ja estão em uso')
        break;
    }
    console.log(i)
}*/