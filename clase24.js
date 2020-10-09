
class Persona{
    constructor( nombre, apellido, altura, edad ){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mi altura es ${this.altura}`)  
    }
    soyAlto(){
        this.altura >= ALTO?console.log('Eres alto'):console.log('No eres alto')    
    }
    mayorDeEdad(){
        console.log('¿Soy mayor de edad? ')
        console.log( this.edad >= 18?'Eres mayor de edad':'No eres mayor de edad')
        return this.edad >= 18 
    }
    // Este trozo de codigo es equivalene a la clase23
    // Es mas facil y menos enredo para hacesr clases
    // Pero por debajo todo sigue siendo prototipos

    // Al usar arrow function dentro de un prototipo
    // this hace referencia el objeto global. En este caso al 
    // objeto window
    // this.mayorDeEdad = () => this.edad >= 18
}
const ALTO = 1.80;
class Desarrollador extends Persona{
    constructor( nombre, apellido, altura, edad  ){
        super( nombre, apellido, altura, edad)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy desarrollador/a`)    
    }
}


// Persona.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mi altura es ${this.altura}`)
//     console.log('¿Soy alto?')
// }

// const ALTO = 1.80;
// Persona.prototype.soyAlto = function( ){
//     this.altura >= ALTO?console.log('Eres alto'):console.log('No eres alto')
//     // Comparacion       valor devuel si es true  Valor devuelto si es false
// }

// Persona.prototype.mayorDeEdad = function(){
//     console.log('¿Soy mayor de edad? ')
//     console.log( this.edad >= 18?'Eres mayor de edad':'No eres mayor de edad')
//     return this.edad >= 18
// }


// heredaDe( Desarrollador, Persona )
// Desarrollador.prototype.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy desarrollador/a`)
// }

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