// Encadenar promesas para hacer requets y mostrarlos resultados en orden 

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
function onError( id ){
    console.log(`Sucedió un problema al obtener el id: ${id}`)  
}

obtenerPersonaje( 1 )
    .then( personaje1 =>{
    console.log(`El personaje 1 es ${personaje1.name}`)  
    return obtenerPersonaje( 2 )
     })
    .then( personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)  
    return obtenerPersonaje( 3 )
    })
    .then( personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)  
    return obtenerPersonaje( 4 )
    })
    .then( personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)  
    return obtenerPersonaje( 5 )
    })
    .then( personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)  
    return obtenerPersonaje( 6 )
    })
    .then( personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)  
    return obtenerPersonaje( 7 )
    })
    .then( personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)  
    })
    .catch( onError )
    