let button_menu = document.querySelector('.button-menu')
let menu = document.querySelector('.menu')
let logo = document.querySelector('.logo')
let ativo = false
button_menu.addEventListener('click', function(){
    const body = document.querySelector('body')
    if(ativo == true){
        logo.style.display = "flex"
        menu.style.display = "block"
        body.style.gridTemplateAreas = `
        "logo barra_sup"
        "menu ausencias"
        "menu card_e_opc"
        `
        ativo = false
    }else{
        body.style.gridTemplateAreas = `
        "barra_sup barra_sup"
        "ausencias ausencias"
        "card_e_opc card_e_opc"
        `
        logo.style.display = "none"
        menu.style.display = "none"
        ativo = true
    }
    console.log('clicou')
})
