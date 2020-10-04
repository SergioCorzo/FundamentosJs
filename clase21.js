var sergio = {
    nombre: 'Sergio',
    altura: 1.68,
    edad: 29,
    cantidaDeLibros: 10
}
var pedro = {
    nombre: 'Pedro',
    altura: 1.70,
    edad: 29,
    cantidaDeLibros: 8
}
var juan = {
    nombre: 'Juan',
    altura: 1.83,
    edad: 32,
    cantidaDeLibros: 15
}
var alma = {
    nombre: 'Alma',
    altura: 1.63,
    edad: 28,
    cantidaDeLibros: 25
}
var xiomara = {
    nombre: 'Xiomara',
    altura: 1.40,
    edad: 8,
    cantidaDeLibros: 5
}
var edduin = {
    nombre: 'Edduin',
    altura: 1.80,
    edad: 23,
    cantidaDeLibros: 18
}

/*const reducer = ( acum, persona ) => {
    return acum + persona.cantidaDeLibros
}*/

const reducer = ( acum, { cantidaDeLibros } ) =>
acum + cantidaDeLibros

var personas = [ sergio, pedro, juan, alma, xiomara, edduin ]

var totalDeLibros = personas.reduce( reducer, 0 )

console.table( personas )
console.log( totalDeLibros )

