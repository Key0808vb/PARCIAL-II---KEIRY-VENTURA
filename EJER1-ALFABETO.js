// EJERCICIO 1: Escriba un programa que solicite al usuario una cadena de texto (palabra o frase) utilizando la librería readline, el programa
//debe de contener una función que permita recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas alfabéticamente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ordenarCadena(cadena) {
    return cadena.split('').sort().join('');
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
    console.log('Cadena ordenada alfabéticamente:', ordenarCadena(texto));
    rl.close();
});
