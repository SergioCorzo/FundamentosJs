var sergio = {
    nombre: 'Sergio',
    apellido: 'Corzo',
    edad: 28,
    peso: 75
}

function imprimirPeso( peso, nombre ){
    console.log(`Peso actual de ${nombre} es de ${peso}`)
}
imprimirPeso( sergio.peso, sergio.nombre )

const META = sergio.peso - 3
const INCREMENTO_DE_PESO = 0.3
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

while ( sergio.peso > META ){

    if ( comeMucho() ){
        aumentarDePeso( sergio )
    }
    if( realizaDeporte() ){
        adelgazar( sergio )
    }
    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${sergio.nombre}alcanzo su meta`)