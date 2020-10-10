
class Persona{
    constructor( nombre, apellido, altura, edad ){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad
    }
    saludar( fn ){
        var nombre = this.nombre //desestruturar atributo de un objeto
        var apellido = this.apellido//para ahorrar codigo
        console.log(`Hola, me llamo ${nombre} ${apellido}`)  
        if( fn ){
            fn( nombre, apellido )
        }
    }
    soyAlto(){
        this.altura >= ALTO?console.log('Eres alto'):console.log('No eres alto')    
    }
    mayorDeEdad(){
        console.log('¿Soy mayor de edad? ')
        console.log( this.edad >= 18?'Eres mayor de edad':'No eres mayor de edad')
        return this.edad >= 18 
    }
    
}
const ALTO = 1.80;
class Desarrollador extends Persona{
    constructor( nombre, apellido, altura, edad  ){
        super( nombre, apellido, altura, edad)
    }
    saludar( fn ){
        var { nombre, apellido } = this //Esta linea de codigo
        // es equivalente con las lineas 10 y 11
        // Es recomendable cuando se desetructuran varios
        // atributos de un mismo objeto
        console.log(`Hola, me llamo ${nombre} ${apellido}, soy desarrollador/a`)    
        if( fn ){
        fn( nombre, apellido, true )
        }
    }
}

function responderSaludo( nombre, apellido, esDev ){
    console.log(`Buen día ${nombre} ${apellido}`)
    if( esDev ){
        console.log('Ah mmirá, no sabia que eras desarrolldor')
    }
}

var sergio = new Desarrollador('Sergio', 'Corzo', 1.68, 28 )
var edduin = new Persona('Edduin', 'climaco', 1.73, 17)
edduin.saludar( responderSaludo )
sergio.saludar( responderSaludo )

