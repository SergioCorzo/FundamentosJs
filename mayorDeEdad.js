var sergio = {
    nombre:'Sergio',
    apellido: 'Corzo',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesion( persona ) {
    console.log(`${persona.nombre} es:`)
    if( persona.ingeniero ){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    if( persona.cocinero ){
        console.log('Cocinero')
    }else{
        console.log('No es cocinero')
    }
    if( persona.cantante ){
        console.log('Cantante')
    }else{
        console.log('No es ccantante')
    }
    if( persona.dj ){
        console.log('Dj')
    }else{
        console.log('No es dj')
    }
    if( persona.guitarrista ){
        console.log('Guitarrrista')
    }else{
        console.log('No es guitarrista')
    }
    if( persona.drone ){
        console.log('Piloto de drone')
    }else{
        console.log('No es piloto de drone')
    }
}

function imprimirMayoriaDeEdad( persona ){
    console.log(`${persona.nombre}`)
    if( persona.edad >= 18 ){
        console.log('Es mayor de edad')
    }
    else{
        console.log('No es mayor de edad')
    }
}
imprimirProfesion( sergio )
imprimirMayoriaDeEdad( sergio )