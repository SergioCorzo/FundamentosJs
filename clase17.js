var signo = prompt('¿Cual es tu signo')
.toLowerCase()//hace todas las letras en minusculas
.trim()//remueve todos los espacios
.normalize('NFD')//elimina los acentos
.replace(/[\u0300-\u0361f]/g, "")//tambien elimina los acentos y dieresis y virgulillas

switch( signo ){
    case 'acuario':
        console.log('tu dia mejorara, sonrie')
    break

    case 'capricornio':
        console.log('Todo saldra bien, confia en ti')
    break

    case 'aries':
        console.log('Es momento de tomar desiciones, la que tomes es la correcta')
    break

    case 'geminis':
        console.log('Es momento de tomarte un respiro para consentirte')
    break

    case 'pisis':
        console.log('No sea timido y pide lo que deseas')
    break

    case 'escorpion':
        console.log('Te diviertes pero eres hiriente. Ten mas cuidado con lo que dices')
    break

    case 'leo':
        console.log('Activate, no te dejes caer. Solo has un poquito mas de esfuerzo')
    break

    case 'tauro':
        console.log('Es un buen momento para empezar ese proyecto que tanto anehlas')
    break

    case 'libra':
    break

    case 'sagitario':
    break

    case 'virgo':
    break

    case 'cancer':
    break

    default:
        console.log('No es un signo valido')
    
}