let ataqueJugador
let ataqueEnemigo
let vidasJugador =3
let vidasEnemigo = 3


function iniciarJuego() {
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display ="none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display ="none"


    let botonMastocaJugador = document.getElementById('boton-mascota')
    botonMastocaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click',reiniciaJuego)
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display ="none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display ="flex"

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
 let spandVidasJugador = document.getElementById("vidas-jugador")
 let spandVidasEnemigo = document.getElementById("vidas-enemigo")
 
 
    if( ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE🤝")
    } else if ( ataqueJugador== 'FUEGO' && ataqueEnemigo == 'TIERRA' ){
        crearMensaje("GANASTE 👍")
        vidasEnemigo--
        spandVidasEnemigo.innerHTML= vidasEnemigo
        
    }else if( ataqueJugador== 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE 👍")
        vidasEnemigo--
        spandVidasEnemigo.innerHTML= vidasEnemigo
        
    }else if( ataqueJugador==  'TIERRA ' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE 👍")
        vidasEnemigo--
        spandVidasEnemigo.innerHTML= vidasEnemigo
        
    }else{
        crearMensaje("PERDISTE 👎")
        vidasJugador--
        spandVidasJugador.innerHTML= vidasJugador
        
    }   
    revisarVidas()

}

function revisarVidas(){
   if (vidasEnemigo == 0 ) {
    crearMensajeFinal("Felicitaciones , Ganaste 😁")
   } else if( vidasJugador == 0) {
     crearMensajeFinal("Lo Siento , Perdiste 🥲")
   } 

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' , la mascota de tu enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado


    sectionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display ="block"

}

function reiniciaJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
