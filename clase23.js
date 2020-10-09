function heredaDe( prototipoHijo, prototipoPadre ){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
// Con esta funcion vacia heredamos de Persona a Dearrollador
// sin solapar o pisar kos meétodos y atributos de Persona

function Persona( nombre, apellido, altura, edad ){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad

    // Al usar arrow function dentro de un prototipo
    // this hace referencia el objeto global. En este caso al 
    // objeto window
    // this.mayorDeEdad = () => this.edad >= 18
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mi altura es ${this.altura}`)
    console.log('¿Soy alto?')
}

const ALTO = 1.80;
Persona.prototype.soyAlto = function( ){
    this.altura >= ALTO?console.log('Eres alto'):console.log('No eres alto')
    // Comparacion       valor devuel si es true  Valor devuelto si es false
}

Persona.prototype.mayorDeEdad = function(){
    console.log('¿Soy mayor de edad? ')
    console.log( this.edad >= 18?'Eres mayor de edad':'No eres mayor de edad')
    return this.edad >= 18
}

function Desarrollador( nombre, apellido, altura, edad ){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad
}

heredaDe( Desarrollador, Persona )
Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy desarrollador/a`)
}

// prototype sirve para modificar el prototipo o clase.
// puedes agregar atributos o metodos afuera del cuerpo
// de la definicion de clase o prototipo


var sergio = new Desarrollador('Serio', 'Corzo', 1.68, 28 )
sergio.saludar()
sergio.soyAlto()
var edduin = new Persona('Edduin', 'climaco', 1.73, 17)
edduin.saludar()
edduin.soyAlto()
console.log(sergio.mayorDeEdad())
console.log(edduin.mayorDeEdad())