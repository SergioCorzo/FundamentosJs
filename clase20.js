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

//const pasarAlturaACms = persona =>{
    //persona.altura = persona.altura * 100
//    persona.altura *=  100
//    return persona
//}

/*const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura: persona.altura *= 100
    }
}*/
var personas = [ sergio, pedro, juan, alma, xiomara, edduin ]
console.table( personas )

const pasarAlturaACms = persona => ( {
    ...persona,
        altura: persona.altura *= 100
} )


var personaCms = personas.map( pasarAlturaACms)

console.log( personaCms)