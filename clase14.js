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

function imprimirEdad ({ nombre, edad }){
    console.log(`${nombre} tinen ${edad} años`)
}
const MAYORIA_DE_EDAD = 18

/*function esMayorDeEdad( persona ){
    return persona.edad >= MAYORIA_DE_EDAD
}*/

/*
//esta es una forma de hacer un Arrow function
const esMayorDeEdad = ( persona ) => {
    return persona.edad >= MAYORIA_DE_EDAD
}*/

/*
const esMayorDeEdad =  persona  => persona.edad >= MAYORIA_DE_EDAD
//podemos omitir lod parentesis solo si es un solo parametro
//que rrecibe la funcion
*/

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirMayoriaDeEdad( persona ){
    if( esMayorDeEdad( persona ) ){
        console.log(`${persona.nombre} es mayor de edad.`)
    }else{
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

imprimirEdad( sergio )
imprimirEdad( omar )

imprimirMayoriaDeEdad( sergio )
imprimirMayoriaDeEdad( omar )