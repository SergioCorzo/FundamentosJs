// Manejar errores en momento de ejecucion con
// $.fail de JQuery
// Para hacer un request o petición debemos saber la dirección URL
// de la API que usaremos
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// la función .replace() es una funcion del objeto String. Nos permite 
// cambiar o remplazar caracteres dentro de un estring ejecución
const opts = { crossDomain: true }

function obtenerPersonaje( id, callback ){
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $
    .get( url, opts, callback )
    .fail( () =>
     console.log(`Sucedio un error. \nNo se pudo obtener el id: ${id}`)
    )

}

//A esta forma de hacer codigo y lidiar con el asincronismo
//se le conoce como callback hell
obtenerPersonaje( 1, function( personaje ){
    console.log(`Hola, yo soy ${personaje.name}`)
    obtenerPersonaje( 2, function( personaje ){
        console.log(`Hola, yo soy ${personaje.name}`)
        obtenerPersonaje( 3, function( personaje ){
            console.log(`Hola, yo soy ${personaje.name}`)
            obtenerPersonaje( 4, function( personaje ){
                console.log(`Hola, yo soy ${personaje.name}`)
                obtenerPersonaje( 5, function( personaje ){
                    console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
} )