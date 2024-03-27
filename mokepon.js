const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMastocaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spandVidasJugador = document.getElementById("vidas-jugador")
const spandVidasEnemigo = document.getElementById("vidas-enemigo")


const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const inputLangostelvis = document.getElementById('Langostelvis')
const inputTucapalma = document.getElementById('Tucapalma')
const inputPydos = document.getElementById('Pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasJugador =3
let vidasEnemigo = 3

class Mokepon {
    constructor (nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida =vida
    }
}

let Hipodoge = new Mokepon('Hipodoge', './imagenes/HIPODOGE.png', 5)

let Capipepo = new Mokepon('Capipepo', './imagenes/CAIPEPO.png', 5)

function iniciarJuego() {
    sectionReiniciar.style.display ="none"
    sectionSeleccionarAtaque.style.display ="none"

    botonMastocaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciaJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display ="none"
    sectionSeleccionarAtaque.style.display ="flex"

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
    crearMensajeFinal("Felicitaciones Ganaste 😁")
   } else if( vidasJugador == 0) {
     crearMensajeFinal("Lo Siento Perdiste 🥲")
   } 

}

function crearMensaje(resultado) {
    let nuevoAtqueDelJugador = document.createElement('p')
    let nuevoAtqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML=resultado
    nuevoAtqueDelJugador.innerHTML=ataqueJugador 
    nuevoAtqueDelEnemigo.innerHTML=ataqueEnemigo


    ataquesDelJugador.appendChild(nuevoAtqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display ="block"
}

function reiniciaJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
