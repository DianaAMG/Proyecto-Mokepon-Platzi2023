
function iniciarJuego(){
    let botonMastocaJugador = document.getElementById('boton-mascota') 
    botonMastocaJugador.addEventListener('click',seleccionarMascotaJugador)

}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if ( inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if ( inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos"
    } else { 
        alert ('Selecciona una Mascota')
    }

}



window.addEventListener('load',iniciarJuego) 