var nombre = prompt( 'Ingresa tu nombre' );
var tamanioCadena = nombre.length - 1;

var ultimaLetra = nombre.charAt( tamanioCadena );
alert( 'Su nombre tiene ' + tamanioCadena + ' letras');
alert('Ultima letra de su nombre: ' + ultimaLetra );