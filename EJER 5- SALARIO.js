// EJERCICIO 5: Cree un programa que solicite al usuario su salario base, el número de horas extras trabajadas y el valor de una hora de trabajo normal. 
// Luego, calcule el salario total, considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el resultado en la consola.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
    const pagoExtras = horasExtras * (valorHoraNormal * 1.5);
    return salarioBase + pagoExtras;
}

rl.question('Ingrese su salario base: ', (salario) => {
    rl.question('Ingrese el número de horas extras trabajadas: ', (horas) => {
        rl.question('Ingrese el valor de una hora normal: ', (valorHora) => {
            const total = calcularSalarioTotal(
                parseFloat(salario),
                parseFloat(horas),
                parseFloat(valorHora)
            );
            console.log(`Su salario total es: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});