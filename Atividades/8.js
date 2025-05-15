//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let x = parseFloat(prompt("Digite o primeiro valor: "));
let y = parseFloat(prompt("Digite o segundo valor: "));

if (x === y) {
    console.log("Os valores não podem ser iguais.");
} else {
    if (x > y) [x, y] = [y, x];
    console.log(`Valores em ordem crescente: ${x}, ${y}`);
}
