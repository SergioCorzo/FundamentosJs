//Mejorar los requets usando async await
//Es una manera mas sencilla
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

const obtenerPersonajes = async ()=>{ //Asi se indica que una funcion es asincrona
var id = [ 1, 2, 3, 4, 5, 6, 7 ]
var promesas = id.map( id => obtenerPersonaje( id ) )
try{//await pausa la funcion hasta obtener todas las promesas
    var personajes = await Promise.all( promesas)//de esta manera se puede guardar las promesas obtenidas en una variable
    personajes.forEach( (personaje, index )=>
            console.log(`El personaje ${index + 1} es ${personaje.name}` ) )
    }catch( id ){
        onError( id )
    }
 }

 obtenerPersonajes()