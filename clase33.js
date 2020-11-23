//Hacer requets usando Promise y arrays para hacerlo en paralelo

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje( id ){
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id )}`

        $.get( url, opts, function (data){
             resolve( data )
         })
         .fail( ()=>reject(id) )
    })
}

function onError( id ){
    console.log(`Sucedió un error al obtener el id: ${id}`)
}

var id = [ 1, 2, 3, 4, 5, 6, 7 ]
/* var promesas = id.map( function( id ){
    return obtenerPersonaje( id )
})*/

var promesas = id.map( id => obtenerPersonaje( id ) )

Promise
    .all( promesas )
    .then( personajes => console.log( personajes ) )
    .catch( onError )