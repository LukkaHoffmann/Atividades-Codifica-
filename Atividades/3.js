//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')(); 
let input = prompt("Digite a nota: ");
let nota = (input);
if (nota >= 6) {
    console.log("aprovado");
} else if (nota >= 4) {
    console.log("recuperacao");
} else {
    console.log("reprovado");
}