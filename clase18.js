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
    altura: 1.63,
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
    altura: 1.75,
    edad: 23
}

var personas = [ sergio, pedro, juan, alma, xiomara, edduin ]

for ( var i = 0; i< personas.length; i++ ){
    console.log(`${personas[i].nombre} mide ${personas[i].altura} mts`)
    console.log(`Su edad es: ${personas[i].edad} años`)
}