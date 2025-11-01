// EJERCICIO 4: Cree una función que permita calcular el descuento de un producto. 
//Solicite al usuario el precio de un producto y el porcentaje de descuento, devuelva el precio final.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(precio, porcentaje) {
    const descuento = (precio * porcentaje) / 100;
    return precio - descuento;
}

rl.question('Ingrese el precio del producto: ', (precio) => {
    rl.question('Ingrese el porcentaje de descuento: ', (porcentaje) => {
        const precioFinal = calcularDescuento(parseFloat(precio), parseFloat(porcentaje));
        console.log(`El precio final con descuento es: $${precioFinal.toFixed(2)}`);
        rl.close();
    });
});