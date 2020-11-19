// Para hacer un request o petición debemos saber la dirección URL
// de la API que usaremos
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const PERSONAJE_URL = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
// la función .replace() es una funcion del objeto String. Nos permite 
// cambiar o remplazar caracteres dentro de un estring ejecución
const opts = { crossDomain: true }
const onResponse = function( personaje ){
    console.log(`Hola, yo soy ${personaje.name}`)
}

$.get(PERSONAJE_URL, opts, function ( personaje ){
    console.log(`Hola, yo soy ${personaje.name}`)
} )//Esta función con la de abajo son equivalentes. Podemos definir
// la función dentro de los parentesís de get o podemos definir
// la función por aparte y pasarle la referencia de la función como parémetro
$.get(PERSONAJE_URL, opts, onResponse )