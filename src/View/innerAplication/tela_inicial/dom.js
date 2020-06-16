let button_menu = document.querySelector('#b-m')
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

class tempoRestante{
    iniciar=(e)=>{
        this.acumulador = setInterval(()=>{
            let tempo = new Date().toLocaleString('pt-Br').split(' ')[1]
            let horas = parseInt(tempo.split(':')[0])
            let minutos = parseInt(tempo.split(':')[1])
            let segundos = parseInt(tempo.split(':')[2])
            let horasRes;
            if(horas > 13){
                horasRes = 24 - (horas - 13)
            }else{
                horasRes = 13 - horas
            }
            let minutosRes = minutos == 0 ? 0 : 60 - minutos
            let segundosRes = segundos == 0 ? 0 : 60 - segundos
            $('#horasRes').html(`<span>${horasRes}:${minutosRes}:${segundosRes}</span>`)
        }, 1000);
    }
    parar=(e)=>{
        console.log('jj')
        clearInterval(this.acumulador)
        $('#horasRes').empty()
    }    
}
const TR = new tempoRestante()
$('body').ready(TR.iniciar)
$('.agendar').one('click', (e)=>{
    TR.parar()
    $('.reserva').html('Agendamento Confirmado')
})
$('.cancelar').one('click', (e)=>{
    TR.iniciar()
    $('.reserva').html('Agendamento Cancelado')
})

$('#b-l').click(e=>{
    for(i in localStorage){
        localStorage.removeItem(i)
    }
    window.location.href = ('http://localhost:3333/home/home.html')
})