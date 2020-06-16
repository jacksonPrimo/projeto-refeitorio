function esconder(e){
    $('body').css({gridTemplateAreas:`
                    "barra_sup barra_sup" 
                    "config config" 
                    "config config"`})
    $('.menu').css("display", "none")
    $('.logo').css("display", "none")
}
function mostrar(e){
    $('body').css({gridTemplateAreas:`
                    "logo barra_sup" 
                    "menu config" 
                    "menu config"`})
    $('.menu').css("display", "block")
    $('.logo').css("display", "flex")
}
let ativado = false
$('.button-menu').click(e=>{
    if(ativado){
        mostrar()
        ativado = false
    }else{
        esconder()
        ativado = true
    }
})