let ataqueJugador
let ataqueEnemigo


function iniciarJuego() {
    let botonMastocaJugador = document.getElementById('boton-mascota')
    botonMastocaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)



}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert('Selecciona una Mascota')
    }

    seleccionarMascotaEnemigo()

}
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6)
    spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'

    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'

    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'

    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'

    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA "
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()

}

function combate(){
    if( ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE🤝")
    } else if ( ataqueJugador== 'FUEGO' && ataqueEnemigo == 'TIERRA' ){
        crearMensaje("GANASTE 👍")
        
    }else if( ataqueJugador== 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE 👍")
        
    }else if( ataqueJugador==  'TIERRA ' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE 👍")
        
    }else{
        crearMensaje("PERDISTE 👎")
        
    }   

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' , la mascota de tu enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado


    sectionMensajes.appendChild(parrafo)

}




function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
