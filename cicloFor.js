var sergio = {
    nombre: 'Sergio',
    apellido: 'Corzo',
    edad: 28,
    peso: 68,
    estatura: 1.68
}

console.log(`El peso al inicio del año de ${sergio.nombre} es de ${sergio.peso} kg`)

const DIAS_DEL_AGNO = 365
const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for ( var i = 1; i <= DIAS_DEL_AGNO; i++ ){
    var random = Math.random()
    if( random < 0.25 ){
        aumentarDePeso( sergio )
    }
    else if( random < 0.5 ){
        adelgazar( sergio )
    }
}

console.log(`El peso al final del año de ${sergio.nombre} es de ${sergio.peso.toFixed(1)} kg`)