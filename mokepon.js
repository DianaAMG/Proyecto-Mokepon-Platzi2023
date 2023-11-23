
function iniciarJuego() {
    let botonMastocaJugador = document.getElementById('boton-mascota')
    botonMastocaJugador.addEventListener('click', seleccionarMascotaJugador)

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
    let ataqueAleatorio = aleatorio(1, 6)
    spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'

    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'

    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'

    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'

    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }



}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego) 