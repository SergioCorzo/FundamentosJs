// Para hacer un request o petición debemos saber la dirección URL
// de la API que usaremos
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// la función .replace() es una funcion del objeto String. Nos permite 
// cambiar o remplazar caracteres dentro de un estring ejecución
const opts = { crossDomain: true }

function obtenerPersonaje( id ){
    
    return new Promise(function(resolve, reject){
        const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`

        $.get(url, opts, function( personaje ){
            resolve( personaje )
        })
        .fail(()=> reject(id))
       
    } )

    
}
//A esta forma de hacer codigo y lidiar con el asincronismo
//se le conoce como callback hell

obtenerPersonaje( 1 )
.then( function( personaje ){
    console.log(`El personaje 1 es ${personaje.name}`)  
     })
    .catch( id =>{
        console.log(`Sucedio un problema al obtener el id: ${id}`)  
    } )
    