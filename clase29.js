// Para hacer un request o petición debemos saber la dirección URL
// de la API que usaremos
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// la función .replace() es una funcion del objeto String. Nos permite 
// cambiar o remplazar caracteres dentro de un estring ejecución
const opts = { crossDomain: true }

function obtenerPersonaje( id, callback ){
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(url, opts, function( personaje ){
        console.log(`Hola, yo soy ${personaje.name}`)

        if( id <= 7 ){
            callback( id + 1 )
        }
    } )

}
//A esta forma de hacer codigo y lidiar con el asincronismo
//se le conoce como callback hell
obtenerPersonaje( 1, function(){
    obtenerPersonaje( 2, function(){
        obtenerPersonaje( 3, function(){
            obtenerPersonaje( 4, function(){
                obtenerPersonaje( 5 )
            })
        })
    })
} )