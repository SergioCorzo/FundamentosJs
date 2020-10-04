function Persona( nombre, apellido, altura ){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mi altura es ${this.altura}`)
    console.log('¿Soy alto?')
}

const ALTO = 1.80;

// prototype sirve para modificar el prototipo o clase.
// puedes agregar atributos o metodos afuera del cuerpo
// de la definicion de clase o prototipo
Persona.prototype.soyAlto = function( ){
    this.altura >= ALTO?console.log('Eres alto'):console.log('No eres alto')
    // Comparacion       valor devuel si es true  Valor devuelto si es false
}

var sergio = new Persona('Serio', 'Corzo', 1.68 )
sergio.saludar()
sergio.soyAlto()
var edduin = new Persona('Edduin', 'climaco', 1.73)
edduin.saludar()
edduin.soyAlto()
