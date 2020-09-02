var sergio = {
    nombre:'Sergio',
    apellido: 'Corzo',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}
var omar = {
    nombre: 'Omar',
    apellido: 'Hernández',
    edad: 15
}

/*function imprimirMayoriaDeEdad( persona ){
    console.log(`${persona.nombre}`)
    if( persona.edad >= 18 ){
        console.log('Es mayor de edad')
    }
    else{
        console.log('No es mayor de edad')
    }
}
Esta funcion puede mejorar usando funciones más pequeñas
como se muestra abajo*/

const MAYORIA_DE_EDAD = 18//hacemos la varible constante
//para que no pueda ser modificada 

function esMayorDeEdad( persona ){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayoriaDeEdad( persona ){
    if( esMayorDeEdad( persona ) ){
        console.log(`${persona.nombre} es mayor de edad.`)
    }else{
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

imprimirMayoriaDeEdad( sergio )
imprimirMayoriaDeEdad( omar )