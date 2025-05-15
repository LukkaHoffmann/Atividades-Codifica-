//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')(); 
let input = prompt("Digite uma idade: ");
let idade = (input);
if (idade >= 70) {
    console.log("idoso");
} else if (idade >= 30) {
    console.log("adulto");
} else if (idade >= 25 ) {
    console.log("adolescente");
} else if (idade >= 14) {
    console.log("criança");
} else {
    console.log("criancinha");
}