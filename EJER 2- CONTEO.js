// EJERCICIO 2: Escriba un programa que solicite al usuario una palabra o cadena de texto,
// crea una función que reciba como parámetro el texto y devuelva la cantidad de caracteres que contiene.

const readline = requiere("readline");

const rl = readline.createInterface({
    input: Process.stdin,
    output: process.stdout
});

function contarCaracteres(texto) {
    return texto.length;
}

rl.question("Ingrese una palabra o una frase: ", (texto) => {
    console.log("La cantidad de caracteres es: ${contarCaracteres(texto)}");
    rl.close();
});