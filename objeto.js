var sergio = {
    nombre:'Sergio',
    apellido: 'Corzo',
    edad: 28,
    imprimir:function (){
        console.log( this.nombre, this.apellido, this.edad );
    }
}

var isaac = {
    nombre: 'Isaac',
    apellido: 'Corzo',
    edad: 40
}
persona.imprimir();

function imprimirNombreMayuscula( nombre ){//De esta
    console.log( nombre.toUpperCase())//manera se pide
}//el atributo del objeto como parametro

imprimirNombreMayuscula( persona.nombre );

function imprimirNombreMayuscula( persona ){//De esta manera
    console.log( persona.nombre.toUpperCase());//se pide un 
}//objeto como parametro

imprimirNombreMayuscula( persona );

function imprimirNombreMayuscula( { nombre } ){
    console.log( nombre.toUpperCase());//De esta manera
}//se especifica que parametros se necesitan para que la
//funcion se ejecute

imprimirNombreMayuscula( { nombre: 'Saul'} );
//Desestructurar un onjeto par usar su atributos
function imprimirNombreYEdad( persona ){
    //var { nombre } = persona;
    //var { edad } = persona;
    //var { apellido } = persona;
    var { nombre, apellido, edad } = persona;
    console.log( `Hola, me llamo ${ nombre } ${ apellido } y tengo ${ edad } años`);
}
 
imprimirNombreMayuscula( sergio );

function cumpleanios( persona ) {
    //persona.edad += 1;
    //edad = persona.edad + 1//De esta manera tenemos que 
    //pasar como argumentos el atributo sergio.edad del 
    //objeto sergio. De esta manera evitamos que el bojeto
    //sea modificado por la función
    return {//De esta otra manera evitamos que el objeto
        ...persona,//se modificado por la función
        edad: persona.edad + 1,//Se devuelve un objeto nuevo
        mensaje: 'Felíz cumpleaños'//tambien puede agregarje
        //atributos nuevos
    };
}
cumpleanios( segio );