function Persona( nombre, apellido, fun ){
    this.nombre = nombre
    this.apellido = apellido
    this.fun
    
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

function soyAlto(){
    console.log('Soy alto')
}

var sergio = new Persona('Serio', 'Corzo', soyAlto() )
sergio.saludar()
sergio.fun
