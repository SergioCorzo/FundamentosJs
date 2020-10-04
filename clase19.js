var sergio = {
    nombre: 'Sergio',
    altura: 1.68,
    edad: 29
}
var pedro = {
    nombre: 'Pedro',
    altura: 1.70,
    edad: 29
}
var juan = {
    nombre: 'Juan',
    altura: 1.83,
    edad: 32
}
var alma = {
    nombre: 'Alma',
    altura: 1.63,
    edad: 28
}
var xiomara = {
    nombre: 'Xiomara',
    altura: 1.40,
    edad: 8
}
var edduin = {
    nombre: 'Edduin',
    altura: 1.80,
    edad: 23
}

//const esAlta = persona => persona.altura >= 1.80

const esAlta = ({altura}) => altura >= 1.80
//const esAlta = ( persona ) => {
//    return persona.altura >= 1.80
//}

//function esAlta( persona ) {
//    return persona.altura >= 1.80
//}

const esBaja = ( { altura } ) => altura <= 1.80
//funcion que devuelve los datos de una persona si es baja

var personas = [ sergio, pedro, juan, alma, xiomara, edduin ]

var personasAltas = personas.filter( esAlta )
var personasBajas = personas.filter ( esBaja )
//La función filter recibe como parametro una condicion
//debe ser una funcion. 
//filter devuelve un array nuevo si se cumple la condicion

console.log( personasBajas )

