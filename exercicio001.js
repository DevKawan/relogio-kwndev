
// PEGANDO DO HTML
const horas = window.document.getElementById('horas')
const minutos = window.document.getElementById('minutos')
const segundos = window.document.getElementById('segundos')
const relogioBck = window.document.getElementById('relogioBck')

const img = window.document.getElementById('img')
const section = document.getElementById('section')
const titulo = document.getElementById('titulo')

// CONST E IF DO RELOGIO

const relogio = setInterval(function tempo() {
    let time = new Date()
    let hr = time.getHours()
    let min = time.getMinutes()
    let s = time.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    horas.textContent = `${hr} :`
    minutos.textContent = `${min} :`
    segundos.textContent = `${s}`


    // IF DAS MENSAGENS E BACKGROUND
    if (hr >= 0 && hr < 12){
        // BOM DIA
        img.src = 'images/foto-manhã.jpg'
        document.body.style.background = "#0033cc"
        section.style.background = "#b38f00"
        relogioBck.style.background = "#0033cc"
    
    } else if (hr >= 13 && hr <= 18){
        // BOA TARDE
        img.src = 'images/foto-tarde.jpg'
        document.body.style.background = "#172081"
        section.style.background = "#cc6600"
        relogioBck.style.background = "#172081"
    
    } else {
        // BOA NOITE
        img.src = 'images/foto-noite.jpg'
        document.body.style.background = "#18181a"
        section.style.background = "#321ea1"
        relogioBck.style.background = "#18181a"
    }
})
