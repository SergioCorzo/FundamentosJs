// Para hacer un request o petición debemos saber la dirección URL
// de la API que usaremos
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'


// la función .replace() es una funcion del objeto String. Nos permite 
// cambiar o remplazar caracteres dentro de un estring ejecución
const opts = { crossDomain: true }
const onResponse = function( personaje ){
    console.log(`Hola, yo soy ${personaje.name}`)
}

function obtenerPersonaje( id ){
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(url, opts, onResponse )
}

obtenerPersonaje( 1 )
obtenerPersonaje( 2 )
obtenerPersonaje( 3 )